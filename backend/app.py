from flask import Flask
from routes import routes
from db_models import db
from db_models_serial import ma
from auth import jwt


app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:jksQxG556kplLyu0JU3Hei4p1UcG7T@szpunar.southcentralus.cloudapp.azure.com/testdb'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.secret_key = 'secret string'
app.register_blueprint(routes)

ma.init_app(app)
jwt.init_app(app)
db.init_app(app)

if __name__ == '__main__':
    #db.create_all()
    app.run()

