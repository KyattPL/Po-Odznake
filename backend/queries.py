
from db_models import *
from sqlalchemy import or_, and_
import sqlalchemy.exc
import logging

#logging.basicConfig(filename="errors.log", encoding="utf-8", level=logging.ERROR)

class DBAccess():

    @staticmethod
    def get_user_segments(usr_id):
        try:
            return Segments.query.filter(Segments.tourist_id==usr_id).all()
        except sqlalchemy.exc.OperationalError as db_error:
            logging.error("Database connection lost!")
            raise db_error

    @staticmethod
    def get_segments(usr_id):
        try:
            return Segments.query.filter(
                or_(
                    Segments.tourist_id==usr_id,
                    Segments.tourist_id==None
                )
            ).all()
        except sqlalchemy.exc.OperationalError as db_error:
            logging.error("Database connection lost!")
            raise db_error
    
    @staticmethod
    def add_segment(description, distance, point_A_id, point_B_id, usr_id):
        try:
            point_A = GeoPoints.query.filter(GeoPoints.id == point_A_id)
            point_B = GeoPoints.query.filter(GeoPoints.id == point_B_id)
            points = int(distance / 1000) + abs(point_A.height - point_B.height)
            seg_A_B = Segments(points, description, True, distance, point_A_id, point_B_id, usr_id)
            seg_B_A = Segments(points, description, True, distance, point_A_id, point_B_id, usr_id)
            db.session.add(seg_A_B)
            db.session.add(seg_B_A)
            db.session.commit()
        except sqlalchemy.exc.OperationalError as db_error:
            logging.error("Database connection lost!")
            raise db_error

    @staticmethod    
    def delete_segment(point_A_id, point_B_id, user_id):
        try:
            segs_to_del = Segments.query.filter(
                and_( Segments.tourist_id == user_id, 
                    or_( 
                        and_( Segments.starting_point_id == point_A_id, Segments.ending_point_id == point_B_id), 
                        and_( Segments.ending_point_id == point_A_id, Segments.starting_point_id == point_B_id))
                )
            )

            for seg in segs_to_del:
                db.session.delete(seg)
            db.session.commit()
        except sqlalchemy.exc.OperationalError as db_error:
            logging.error("Database connection lost!")
            raise db_error
    
    @staticmethod
    def update_segment(user_id, description, distance, point_A_id, point_B_id, new_point_A_id, new_point_B_id):
        try:
            segs_to_upd = Segments.query.filter(
                and_( Segments.tourist_id == user_id, 
                    or_( 
                        and_( Segments.starting_point_id == point_A_id, Segments.ending_point_id == point_B_id), 
                        and_( Segments.ending_point_id == point_A_id, Segments.starting_point_id == point_B_id))
                )
            )
            point_A = GeoPoints.query.filter(GeoPoints.id == point_A_id)
            point_B = GeoPoints.query.filter(GeoPoints.id == point_B_id)
            points = int(distance / 1000) + abs(point_A.height - point_B.height)
            segs_to_upd[0].starting_point_id = new_point_A_id
            segs_to_upd[0].ending_point_id = new_point_B_id
            segs_to_upd[0].description = description
            segs_to_upd[0].distance = distance
            segs_to_upd[0].points = points
            segs_to_upd[1].starting_point_id = new_point_B_id
            segs_to_upd[1].ending_point_id = new_point_A_id
            segs_to_upd[1].description = description
            segs_to_upd[1].distance = distance
            segs_to_upd[1].points = points

            db.session.commit()
        except sqlalchemy.exc.OperationalError as db_error:
            logging.error("Database connection lost!")
            raise db_error

    @staticmethod
    def add_route(segments):
        try:
            rt = MountainRoutes()
            db.session.add(rt)
            for seg in segments:
                seg_in_rt = SegmentsInRoutes(seg.id, rt.id)
                db.session.add(seg_in_rt)
            db.session.commit()
        except sqlalchemy.exc.OperationalError as db_error:
            logging.error("Database connection lost!")
            raise db_error   

    @staticmethod
    def get_points():
        try:
            return GeoPoints.query.all()
        except sqlalchemy.exc.OperationalError as db_error:
            logging.error("Database connection lost!")
            raise db_error

    @staticmethod
    def get_def_segments():
        try:
            return Segments.query.filter(Segments.tourist_id==None).all()
        except sqlalchemy.exc.OperationalError as db_error:
            logging.error("Database connection lost!")
            raise db_error   

    @staticmethod
    def get_def_points():
        try:
            return GeoPoints.query.all()
        except sqlalchemy.exc.OperationalError as db_error:
            logging.error("Database connection lost!")
            raise db_error

    @staticmethod
    def get_segment(starting_point_id, ending_point_id):
        try:
            return Segments.query.filter(Segments.starting_point_id == starting_point_id, Segments.ending_point_id == ending_point_id).first()
        except sqlalchemy.exc.OperationalError as db_error:
            logging.error("Database connection lost!")
            raise db_error

    @staticmethod
    def get_points():
        try:
            return GeoPoints.query.all()
        except sqlalchemy.exc.OperationalError as db_error:
            logging.error("Database connection lost!")
            raise db_error
    
    @staticmethod
    def get_trips():
        try:
            return Trips.query.all()
        except sqlalchemy.exc.OperationalError as db_error:
            logging.error("Database connection lost!")
            raise db_error
            
    @staticmethod
    def get_users():
        try:
            return Tourists.query.all()
        except sqlalchemy.exc.OperationalError as db_error:
            logging.error("Database connection lost!")
            raise db_error
    
    @staticmethod
    def get_user_by_name(username):
        try:
            return Tourists.query.filter(Tourists.login == username).first()
        except sqlalchemy.exc.OperationalError as db_error:
            logging.error("Database connection lost!")
            raise db_error
    
    @staticmethod
    def get_user_by_id(id):
        try:
            return Tourists.query.filter(Tourists.id == id).first()
        except sqlalchemy.exc.OperationalError as db_error:
            logging.error("Database connection lost!")
            raise db_error

    @staticmethod
    def get_user_book_entries(usr_id):
        try:
            #trip = BooksEntries.query.join(Tourists, BooksEntries.book_id == Books.serial_number).join(Trips)
            #print(BooksEntries.query.join(Books, BooksEntries.book_id == Books.serial_number).join(Tourists, Tourists.book_id == Books.serial_number).join(Trips, Trips.id == BooksEntries.trip_id).add_column(Trips.points).filter(Tourists.id == usr_id).order_by(BooksEntries.entry_date, Trips.points).all())
            user_book_entries_w_points = BooksEntries.query.join(Books, BooksEntries.book_id == Books.serial_number).join(Tourists, Tourists.book_id == Books.serial_number).join(Trips, Trips.id == BooksEntries.trip_id).add_column(Trips.points).filter(Tourists.id == usr_id).order_by(BooksEntries.entry_date.desc(), Trips.points).all()
            user_book_entries = []
            for book_entry in user_book_entries_w_points:
                user_book_entries.append(book_entry[0])
            return user_book_entries
            #return BooksEntries.query.join(Books, BooksEntries.book_id == Books.serial_number).join(Tourists, Tourists.book_id == Books.serial_number).filter(Tourists.id == usr_id).all()
        except sqlalchemy.exc.OperationalError as db_error:
            logging.error("Database connection lost!")
            raise db_error 

    @staticmethod
    def get_point_by_id(id):
        try:
            return GeoPoints.query.filter(GeoPoints.id == id).first()
        except sqlalchemy.exc.OperationalError as db_error:
            logging.error("Database connection lost!")
            raise db_error
    
    @staticmethod
    def add_new_entry(user_id, start_date, end_date, trip_id):
        try:
            curr_usr = Tourists.query.filter(Tourists.id == user_id).first()
            book_entry = BooksEntries(trip_id, curr_usr.book_id, start_date, end_date)
            db.session.add(book_entry)
            db.session.commit()
        except sqlalchemy.exc.OperationalError as db_error:
            logging.error("Database connection lost!")
            raise db_error
    
    @staticmethod
    def change_book_entry(user_id, trip_id, new_trip_id, new_start_date, new_end_date):
        try:
            curr_usr = Tourists.query.filter(Tourists.id == user_id).first()
            book_entry = BooksEntries.query.filter(BooksEntries.book_id == curr_usr.book_id, BooksEntries.trip_id == trip_id).first()
            book_entry.trip_id = new_trip_id
            book_entry.start_date = new_start_date
            book_entry.end_date = new_end_date
            db.session.commit()
        except sqlalchemy.exc.OperationalError as db_error:
            logging.error("Database connection lost!")
            raise db_error
    
    @staticmethod
    def delete_book_entry(user_id, trip_id):
        try:
            curr_usr = Tourists.query.filter(Tourists.id == user_id).first()
            book_entry = BooksEntries.query.filter(BooksEntries.book_id == curr_usr.book_id, BooksEntries.trip_id == trip_id).first()
            db.session.delete(book_entry)
            db.session.commit()
        except sqlalchemy.exc.OperationalError as db_error:
            logging.error("Database connection lost!")
            raise db_error

