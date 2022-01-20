
import sqlalchemy.exc
from flask import Blueprint, jsonify, current_app, request
#from flask_jwt import JWT, jwt_required, current_identity
from flask_login import current_user, login_required, logout_user
from sqlalchemy.orm import query
from queries import DBAccess
from db_models_serial import Schemas
from auth import authenticate
from datetime import datetime

routes = Blueprint('routes', __name__)

@routes.route("/")
def index():
    return current_app.send_static_file("index.html")

@routes.route("/add")
def add_language():
    all_user_entries = DBAccess.get_user_book_entries(1)
    return jsonify(Schemas.book_entries_schema.dump(all_user_entries))

@routes.route("/get_segments", methods = ['GET'])
def get_segments():
    segments_list = []
    try:
        if current_user == None:
            segments_list = DBAccess.get_def_segments()
        else:
            segments_list = DBAccess.get_segments(current_user.get_id())
        return jsonify(Schemas.segments_schema.dump(segments_list))
    except sqlalchemy.exc.OperationalError:
        return jsonify({"message":"Database connection error"}), 500

@routes.route("/get_user_segments", methods = ['GET'])
@login_required
def get_user_segments():
    user_id = current_user.get_id()
    try:
        user_segments_list = DBAccess.get_user_segments(user_id)
        return jsonify(Schemas.segments_schema.dump(user_segments_list))
    except sqlalchemy.exc.OperationalError:
        return jsonify({"message":"Database connection error"}), 500

@routes.route("/get_trips", methods = ['GET'])
@login_required
def get_trips():
    try:
        trips_list = DBAccess.get_trips()
        return jsonify(Schemas.trips_schema.dump(trips_list))
    except sqlalchemy.exc.OperationalError:
        return jsonify({"message":"Database connection error"}), 500

@routes.route("/get_points", methods = ['GET'])
def get_points():
    try:
        points_list = DBAccess.get_points()
        return jsonify(Schemas.points_schema.dump(points_list))
    except sqlalchemy.exc.OperationalError:
        return jsonify({"message":"Database connection error"}), 500

@routes.route("/get_points_dict", methods = ['GET'])
def get_points_dict():
    try:
        points_list = DBAccess.get_points()
        point_dict_list = []
        for point in points_list:
            point_dict_list.append({f"{point.id}":Schemas.point_schema.dump(point)})
        return jsonify(point_dict_list)
    except sqlalchemy.exc.OperationalError:
        return jsonify({"message":"Database connection error"}), 500

@routes.route("/add_new_segment", methods = ['POST'])
@login_required
def add_new_segment():
    user_id = current_user.get_id()
    description = request.json['description']
    distance = request.json['distance']
    point_A_id = int(request.json['point_a_id'])
    point_B_id = int(request.json['point_b_id'])
    the_same_point = DBAccess.get_segment(point_A_id, point_B_id)
    if the_same_point != None:
        return jsonify({"message":"Cannot duplicate segment"}), 500
    try:
        DBAccess.add_segment(description, distance, point_A_id, point_B_id, user_id)
        user_segments_list = DBAccess.get_user_segments(user_id)
        return jsonify(Schemas.segments_schema.dump(user_segments_list)), 200
    except sqlalchemy.exc.OperationalError:
        return jsonify({"message":"Database connection error"}), 500

@routes.route("/add_new_route", methods = ['POST'])
@login_required
def add_new_route():
    points_list = request.json
    pt_n = 0
    pt_n_1 = 1
    segments_list = []
    if len(points_list) < 3:
        return jsonify({"status":"Trip must include at least 2 segments"}), 400
    try:
        while pt_n_1 != len(points_list):
            segment = DBAccess.get_segment(points_list[pt_n]["id"], points_list[pt_n_1]["id"])
            if segment == None:
                return jsonify({"status":"Encountered nonexistent segment"}), 400
            segments_list.append(segment)
            pt_n += 1
            pt_n_1 += 1 
        
        DBAccess.add_route(segments_list)
        return jsonify({"status":"Added segments to a route"}), 200
    except sqlalchemy.exc.OperationalError:
        return jsonify({"message":"Database connection error"}), 500

@routes.route("/delete_segment", methods = ['POST'])
@login_required
def delete_segment():
    user_id = current_user.get_id()
    point_A_id = int(request.json['point_a_id'])
    point_B_id = int(request.json['point_b_id'])
    try:
        DBAccess.delete_segment(point_A_id, point_B_id, user_id)
        user_segments_list = DBAccess.get_user_segments(user_id)
        return jsonify(Schemas.segments_schema.dump(user_segments_list)), 200
    except sqlalchemy.exc.OperationalError:
        return jsonify({"message":"Database connection error"}), 500


@routes.route("/edit_segment", methods = ['POST'])
@login_required
def edit_segment():
    user_id = current_user.get_id()
    point_A_id = int(request.json['point_a_id'])
    point_B_id = int(request.json['point_b_id'])
    description = request.json['description']
    distance = request.json['distance']
    new_point_A_id = int(request.json['new_point_a_id'])
    new_point_B_id = int(request.json['new_point_b_id'])
    try:
        DBAccess.update_segment(user_id, description, distance, point_A_id, point_B_id, new_point_A_id, new_point_B_id)
        user_segments_list = DBAccess.get_user_segments(user_id)
        return jsonify(Schemas.segments_schema.dump(user_segments_list)), 200
    except sqlalchemy.exc.OperationalError:
        return jsonify({"message":"Database connection error"}), 500

@routes.route("/get_user_entries", methods = ['GET'])
@login_required
def get_user_entries():
    user_id = current_user.get_id()
    try:
        all_user_entries = DBAccess.get_user_book_entries(user_id)
        #print(str(DBAccess.get_user_book_entries(353453)[0][0].id) + " " + str(DBAccess.get_user_book_entries(353453)[1][0].id))
        # + str(DBAccess.get_point_by_id(rec[3]).name) + " " + str(DBAccess.get_point_by_id(rec[4]).name)
        return jsonify(Schemas.book_entries_schema.dump(all_user_entries))
    except sqlalchemy.exc.OperationalError:
        return jsonify({"message":"Database connection error"}), 500

@routes.route("/add_new_entry", methods = ['POST'])
@login_required
def add_new_entry():
    user_id = current_user.get_id()
    #entry_date = datetime.strptime(request.json['entry_date'],'%d:%m:%Y')
    start_date = datetime.strptime(request.json['start_date'],'%d.%m.%Y').date()
    end_date = datetime.strptime(request.json['end_date'],'%d.%m.%Y').date()
    trip_id = int(request.json['trip_id'])
    try:
        DBAccess.add_new_entry(user_id, start_date, end_date, trip_id)
        user_book_entries = DBAccess.get_user_book_entries(user_id)
        return jsonify(Schemas.book_entries_schema.dump(user_book_entries)), 200
    except sqlalchemy.exc.OperationalError:
        return jsonify({"message":"Database connection error"}), 500

@routes.route("/change_entry", methods = ['POST'])
@login_required
def change_book_entry():
    user_id = current_user.get_id()
    trip_id = int(request.json['trip_id'])
    new_trip_id = int(request.json['new_trip_id'])
    new_start_date = datetime.strptime(request.json['new_start_date'],'%d.%m.%Y').date()
    new_end_date = datetime.strptime(request.json['new_end_date'],'%d.%m.%Y').date()
    if (new_start_date > new_end_date):
        return jsonify({"message":"Start date must earlier than end date"}), 400
    try:
        DBAccess.change_book_entry(user_id, trip_id, new_trip_id, new_start_date, new_end_date)
        user_book_entries = DBAccess.get_user_book_entries(user_id)
        return jsonify(Schemas.book_entries_schema.dump(user_book_entries)), 200
    except sqlalchemy.exc.OperationalError:
        return jsonify({"message":"Database connection error"}), 500

@routes.route("/delete_entry", methods = ['POST'])
@login_required
def delete_book_entry():
    user_id = current_user.get_id()
    trip_id = int(request.json['trip_id'])
    try:
        DBAccess.delete_book_entry(user_id, trip_id)
        user_book_entries = DBAccess.get_user_book_entries(user_id)
        return jsonify(Schemas.book_entries_schema.dump(user_book_entries)), 200
    except sqlalchemy.exc.OperationalError:
        return jsonify({"message":"Database connection error"}), 500

@routes.route("/login", methods = ['POST'])
def login_user():
    username = request.json['username']
    password = request.json['password']
    return {"auth_status": True} if authenticate(username, password) else {"auth_status": False}


@routes.route("/curr_identity", methods = ['GET'])
@login_required
def get_current_identity():
    return {"user_id":current_user.get_id()} if current_user.get_id() != None and current_user.is_authenticated() else {"user_id": None}

@routes.route("/logout", methods = ['POST'])
@login_required
def logout():
    user = current_user
    user.authenticated = False
    logout_user()
    return {"logout_successfull":True}
