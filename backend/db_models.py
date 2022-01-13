from sqlalchemy.orm import backref
from flask_sqlalchemy import SQLAlchemy
import hashlib

db = SQLAlchemy()


class MountainRoutes(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    segments_in_route = db.relationship('SegmentsInRoutes', backref=db.backref('mountainroutes',lazy=True))
    def __init__(self):
        pass

class GeoPoints(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(30), nullable=True)
    description = db.Column(db.String(255), nullable=True)
    latitude = db.Column(db.Float(10), nullable=False)
    longitude = db.Column(db.Float(10), nullable=False)
    exists = db.Column(db.Boolean, nullable=False)
    height = db.Column(db.Integer, nullable=False)

    def __init__(self, name, description, latitude, longitude, exists, height):
        self.name = name
        self.description = description
        self.latitude = latitude
        self.longitude = longitude
        self.exists = exists
        self.height = height


class Books(db.Model):
    serial_number = db.Column(db.Integer, primary_key=True)

    def __init__(self, serial_number):
        self.serial_number = serial_number

class Tourists(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    last_name = db.Column(db.String(30), nullable=False)
    name = db.Column(db.String(30), nullable=False)
    login = db.Column(db.String(30), nullable=False, unique=True)
    password = db.Column(db.String(64), nullable=False)
    email = db.Column(db.String(30), nullable=False, unique=True)
    age = db.Column(db.Integer, nullable=False)
    book_id = db.Column(db.Integer, db.ForeignKey('books.serial_number'))
    book = db.relationship('Books', backref=db.backref('tourists',lazy=True), uselist=False)
    
    def __init__(self, name, last_name, login, password, email, age, preferred_lang, book_id):
        sha_engine = hashlib.sha256()
        sha_engine.update(password.encode(encoding='utf-8'))
        self.name = name
        self.last_name = last_name
        self.login = login
        self.password = sha_engine.hexdigest()
        self.email = email
        self.age = age
        self.preferred_lang = preferred_lang
        self.book_id = book_id


class Trips(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    starting_point_id = db.Column(db.Integer, db.ForeignKey('geo_points.id'), nullable=False)
    ending_point_id = db.Column(db.Integer, db.ForeignKey('geo_points.id'), nullable=False)
    start_date = db.Column(db.Date, nullable=False)
    end_date = db.Column(db.Date, nullable=False)
    
    starting_point = db.relationship('GeoPoints', foreign_keys=starting_point_id, backref=db.backref('trips', lazy=True))
    ending_point = db.relationship('GeoPoints', foreign_keys=ending_point_id, backref=db.backref('trips2', lazy=True))

    def __init__(self, starting_point_id, ending_point_id):
        self.starting_point_id = starting_point_id
        self.ending_point_id = ending_point_id


class Segments(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    points = db.Column(db.Integer, nullable=False)
    description = db.Column(db.String(100), nullable=True)
    is_active = db.Column(db.Boolean, nullable=False)
    distance = db.Column(db.Integer, nullable=False)
    #trial_color = db.Column(db.String(30), db.ForeignKey('trial_colors.name'), nullable=True)
    starting_point_id = db.Column(db.Integer, db.ForeignKey('geo_points.id'), nullable=False)
    ending_point_id = db.Column(db.Integer, db.ForeignKey('geo_points.id'), nullable=False)
    tourist_id = db.Column(db.Integer, db.ForeignKey('tourists.id'), nullable=True)

    starting_point = db.relationship('GeoPoints', foreign_keys=starting_point_id, backref=db.backref('segments', lazy=True))
    ending_point = db.relationship('GeoPoints', foreign_keys=ending_point_id, backref=db.backref('segments2', lazy=True))

    def __init__(self, points, description, is_active, distance, trial_color, starting_point_id, ending_point_id, tourist_id):
        self.points = points
        self.description = description
        self.is_active = is_active
        self.distance = distance
        self.trial_color = trial_color
        self.starting_point_id = starting_point_id
        self.ending_point_id = ending_point_id
        self.tourist_id = tourist_id

class BooksEntries(db.Model):
    book_id = db.Column(db.Integer, db.ForeignKey('books.serial_number'), primary_key=True, autoincrement=False)
    trip_id = db.Column(db.Integer, db.ForeignKey('trips.id'), primary_key=True, autoincrement=False)
    entry_date = db.Column(db.Date, nullable=True)

    trip = db.relationship("Trips", backref=db.backref("books_entries", lazy=True))

    def __init__(self, trip_of_tourist_id, book_id, entry_date):
        self.trip_of_tourist_id = trip_of_tourist_id
        self.book_id = book_id
        self.entry_date = entry_date

class SegmentsInRoutes(db.Model):
    segment_id = db.Column(db.Integer, db.ForeignKey('segments.id'), primary_key=True, autoincrement=False)
    route_id = db.Column(db.Integer, db.ForeignKey('mountain_routes.id'), primary_key=True, autoincrement=False)

    segment = db.relationship('Segments', backref=db.backref('segmentsinroutes', lazy=True))

    def __init__(self, segment_id, route_id):
        self.segment_id = segment_id
        self.route_id = route_id