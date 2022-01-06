
from flask import Blueprint, jsonify
from queries import DBAccess
from db_models_serial import Schemas

routes = Blueprint('routes', __name__)

@routes.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@routes.route("/add")
def add_language():
    pass

@routes.route("/get")
def get_languages():
    pass