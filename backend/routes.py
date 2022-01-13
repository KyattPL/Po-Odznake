from flask import Blueprint, jsonify, current_app, request
#from flask_jwt import JWT, jwt_required, current_identity
from flask_login import current_user, login_required, logout_user
from sqlalchemy.orm import query
from queries import DBAccess
from db_models_serial import Schemas
from auth import authenticate

routes = Blueprint('routes', __name__)

@routes.route("/")
def index():
    return current_app.send_static_file("index.html")

@routes.route("/add")
def add_language():
    pass

@routes.route("/get_user_entries", methods = ['POST'])
@login_required
def get_user_entries():
    user_id = current_user.get_id()
    all_user_entries = DBAccess.get_user_book_entries(user_id)
    #print(str(DBAccess.get_user_book_entries(353453)[0][0].id) + " " + str(DBAccess.get_user_book_entries(353453)[1][0].id))
    # + str(DBAccess.get_point_by_id(rec[3]).name) + " " + str(DBAccess.get_point_by_id(rec[4]).name)
    return jsonify(Schemas.book_entries_schema.dump(all_user_entries))

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
def logout():
    user = current_user
    user.authenticated = False
    logout_user()