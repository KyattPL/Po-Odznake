from flask import Blueprint, jsonify, current_app
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
    pass