from flask import Blueprint, jsonify, current_app
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

@routes.route("/get")
def get_languages():
    query_res = DBAccess.get_user_book_entries(353453)
    print(query_res)
    for rec in query_res:
        print(rec.__str__() + " " + str(DBAccess.get_point_by_id(rec[3]).name) + " " + str(DBAccess.get_point_by_id(rec[4]).name))
    #print(str(DBAccess.get_user_book_entries(353453)[0][0].id) + " " + str(DBAccess.get_user_book_entries(353453)[1][0].id))
    return {"app":"flask"}

@routes.route("/curr_identity")
@jwt_required()
def get_current_identity():
    return '%s' % current_identity

