from flask import Blueprint, jsonify, current_app, request
from flask_jwt import JWT, jwt_required, current_identity
from sqlalchemy.orm import query
from queries import DBAccess
from db_models_serial import Schemas

routes = Blueprint('routes', __name__)

@routes.route("/")
def index():
    return current_app.send_static_file("index.html")

@routes.route("/add")
def add_language():
    pass

@routes.route("/get_user_entries", methods = ['POST'])
def get_user_entries():
    user_id = request.json['user_id']
    all_user_entries = DBAccess.get_user_book_entries(user_id)
    #print(str(DBAccess.get_user_book_entries(353453)[0][0].id) + " " + str(DBAccess.get_user_book_entries(353453)[1][0].id))
    # + str(DBAccess.get_point_by_id(rec[3]).name) + " " + str(DBAccess.get_point_by_id(rec[4]).name)
    return jsonify(Schemas.book_entries_schema.dump(all_user_entries))

@routes.route("/curr_identity")
@jwt_required()
def get_current_identity():
    print(current_identity.__getattr__('__members__'))
    return '%s' % current_identity

