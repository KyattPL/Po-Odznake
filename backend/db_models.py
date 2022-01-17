import email
import re
from sqlalchemy.orm import backref
from flask_sqlalchemy import SQLAlchemy
from datetime import date
import hashlib

db = SQLAlchemy()
regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'

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
        if type(name) != str or type(description) != str:
            raise TypeError("Name and description must be strings")
        if type(latitude) not in [float,int] or type(longitude) not in [float, int]:
            raise TypeError("Latitude and longtitude must be real numbers")
        if type(exists) != bool:
            raise TypeError("Exists information must be passed as boolean")
        if type(height) != int:
            raise TypeError("Height must be integer number")
        if height < 0 or height > 9000:
            raise ValueError("Height must be in the range of (0, 9000)")
        if len(name) > 30:
            raise ValueError("Name too long")
        if len(description) > 255:
            raise ValueError("Description too long")
        if latitude < -90.0 or latitude > 90.0:
            raise ValueError("Latitude must be in the range of (-90, 90)")
        if longitude < -180.0 or longitude > 180.0:
            raise ValueError("Longtitude must be in the range of (-180, 180)")
        
        self.name = name
        self.description = description
        self.latitude = latitude
        self.longitude = longitude
        self.exists = exists
        self.height = height


class Books(db.Model):
    serial_number = db.Column(db.Integer, primary_key=True)

    def __init__(self, serial_number):
        if type(serial_number) != int:
            raise TypeError("Serial number of the book must be an integer")
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
    
    def __init__(self, name, last_name, login, password, email, age, book_id):
        if type(name) != str or type(last_name) != str:
            raise TypeError("First name and last name must be strings")
        if type(login) != str or type(password) != str:
            raise TypeError("Credentials must be strings")
        if type(email) != str:
            raise TypeError("Email address must be string")
        if type(age) != int:
            raise TypeError("Age must be an integer")
        if book_id != None and type(book_id) != int:
            raise TypeError("Book id must be an integer")
        if len(name) > 30:
            raise ValueError("First name too long")
        if len(last_name) > 30:
            raise ValueError("Last name too long")
        if len(login) > 30:
            raise ValueError("Login too long")
        if len(email) > 30:
            raise ValueError("Email too long")
        if age < 12:
            raise ValueError("Required age too small")
        if not re.fullmatch(regex, email):
            raise ValueError("Given email address is not valid")
        
        sha_engine = hashlib.sha256()
        sha_engine.update(password.encode(encoding='utf-8'))
        self.name = name
        self.last_name = last_name
        self.login = login
        self.password = sha_engine.hexdigest()
        self.email = email
        self.age = age
        self.book_id = book_id


class Trips(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    starting_point_id = db.Column(db.Integer, db.ForeignKey('geo_points.id'), nullable=False)
    ending_point_id = db.Column(db.Integer, db.ForeignKey('geo_points.id'), nullable=False)
    points = db.Column(db.Integer, nullable=False)
    starting_point = db.relationship('GeoPoints', foreign_keys=starting_point_id, backref=db.backref('trips', lazy=True))
    ending_point = db.relationship('GeoPoints', foreign_keys=ending_point_id, backref=db.backref('trips2', lazy=True))
    def __init__(self, starting_point_id, ending_point_id, points):
        if type(starting_point_id) != int or type(ending_point_id) != int:
            raise TypeError("Both ids of starting and ending points must be integers")
        if type(points) != int:
            raise TypeError("Number of points must be an integer number")
        if points < 1:
            raise ValueError("Number of points must be at least equal to 1")
        self.starting_point_id = starting_point_id
        self.ending_point_id = ending_point_id
        self.points = points


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

    def __init__(self, points, description, is_active, distance, starting_point_id, ending_point_id, tourist_id):
        if type(points) != int:
            raise TypeError("Number of points must be an integer number")
        if type(description) != str:
            raise TypeError("Description must be a string")
        if type(is_active) != bool:
            raise TypeError("Is active information must be passed as boolean must be a string")
        if type(distance) != int:
            raise TypeError("Distance must be an integer number")
        if type(starting_point_id) != int or type(ending_point_id) != int:
            raise TypeError("Both ids of starting and ending points must be integers")
        if tourist_id != None and type(tourist_id) != int:
            raise TypeError("Tourist id must be an integer number")
        if points < 1:
            raise ValueError("Number of points must be at least equal to 1")
        if len(description) > 100:
            raise ValueError("Description too long")
        if distance < 0:
            raise ValueError("Distance must be positive integer")

        self.points = points
        self.description = description
        self.is_active = is_active
        self.distance = distance
        self.starting_point_id = starting_point_id
        self.ending_point_id = ending_point_id
        self.tourist_id = tourist_id

class BooksEntries(db.Model):
    book_id = db.Column(db.Integer, db.ForeignKey('books.serial_number'), primary_key=True, autoincrement=False)
    trip_id = db.Column(db.Integer, db.ForeignKey('trips.id'), primary_key=True, autoincrement=False)
    entry_date = db.Column(db.Date, nullable=True)
    start_date = db.Column(db.Date, nullable=False)
    end_date = db.Column(db.Date, nullable=False)
    
    trip = db.relationship("Trips", backref=db.backref("books_entries", lazy=True))

    def __init__(self, trip_of_tourist_id, book_id, start_date, end_date):
        if type(trip_of_tourist_id) != int or type(book_id) != int:
            raise TypeError("Trip of tourist id and book id must be integers")
        if type(start_date) != date or type(end_date) != date:
            raise TypeError("Staring date and ending date must be date objects")
        if start_date > end_date:
            raise ValueError("Starting date must be earlier than ending date")

        self.trip_id = trip_of_tourist_id
        self.book_id = book_id
        self.entry_date = date.today()
        self.start_date = start_date
        self.end_date = end_date

class SegmentsInRoutes(db.Model):
    segment_id = db.Column(db.Integer, db.ForeignKey('segments.id'), primary_key=True, autoincrement=False)
    route_id = db.Column(db.Integer, db.ForeignKey('mountain_routes.id'), primary_key=True, autoincrement=False)

    segment = db.relationship('Segments', backref=db.backref('segmentsinroutes', lazy=True))

    def __init__(self, segment_id, route_id):
        if type(segment_id) != int:
            raise TypeError("Segment id must be an integer")

        if type(route_id) != int:
            raise TypeError("Route id must be an integer")

        self.segment_id = segment_id
        self.route_id = route_id