from flask import Flask, render_template, request, flash, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:jksQxG556kplLyu0JU3Hei4p1UcG7T@szpunar.southcentralus.cloudapp.azure.com/flasksql'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.secret_key = 'secret string'

db = SQLAlchemy(app)

ma = Marshmallow(app)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/add")
def add_language():
    import db_models
    import db_models_serial
    usr = db_models.Tourists("Siema","Tu","XD","passwd23","jakub@jastrz.com", 23, None, book.serial_number)
    db.session.add(usr)
    db.session.commit()
    return db_models_serial.tourist_schema.jsonify(usr)

@app.route("/get")
def get_languages():
    import db_models
    import db_models_serial
    languages = db_models.Languages.query.all()
    results = db_models_serial.languages_schema.dump(languages)
    return jsonify(results)

if __name__ == '__main__':

    import db_models
    db.create_all()
    app.run()