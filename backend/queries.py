from db_models import *
import sqlalchemy.exc
import logging

#logging.basicConfig(filename="errors.log", encoding="utf-8", level=logging.ERROR)

class DBAccess():

    @staticmethod
    def get_segments(usr_id):
        try:
            return Segments.query.filter(Segments.tourist_id==usr_id or Segments.tourist_id==None).all()
        except sqlalchemy.exc.OperationalError:
            logging.error("Database connection lost!")
    
    @staticmethod
    def add_segment(points, description, distance, trial_color, point_A_id, point_B_id, usr_id):
        try:
            seg_A_B = Segments(points, description, True, distance, trial_color, point_A_id, point_B_id, usr_id)
            seg_B_A = Segments(points, description, True, distance, trial_color, point_A_id, point_B_id, usr_id)
            db.session.add(seg_A_B)
            db.session.add(seg_B_A)
            db.session.commit()
        except sqlalchemy.exc.OperationalError:
            logging.error("Database connection lost!")

    @staticmethod    
    def delete_segment(point_A_id, point_B_id):
        try:
            segs_to_del = Segments.query.filter(Segments.starting_point_id == point_A_id and Segments.ending_point_id == point_B_id or Segments.ending_point_id == point_A_id and Segments.starting_point_id == point_B_id)

            for seg in segs_to_del:
                db.session.delete(seg)
            db.session.commit()
        except sqlalchemy.exc.OperationalError:
            logging.error("Database connection lost!")
    
    @staticmethod
    def update_segment(point_A_id, point_B_id, new_point_A_id, new_point_B_id):
        try:
            segs_to_upd = Segments.query.filter(Segments.starting_point_id == point_A_id and Segments.ending_point_id == point_B_id or Segments.ending_point_id == point_A_id and Segments.starting_point_id == point_B_id)

            segs_to_upd[0].starting_point_id = new_point_A_id
            segs_to_upd[0].ending_point_id = new_point_B_id
            segs_to_upd[1].starting_point_id = new_point_B_id
            segs_to_upd[1].ending_point_id = new_point_A_id

            db.session.commit()
        except sqlalchemy.exc.OperationalError:
            logging.error("Database connection lost!")

    @staticmethod
    def add_route(segments):
        try:
            rt = MountainRoutes()
            db.session.add(rt)
            for seg in segments:
                seg_in_rt = SegmentsInRoutes(seg.id, rt.id)
                db.session.add(seg_in_rt)
            db.session.commit()
        except sqlalchemy.exc.OperationalError:
            logging.error("Database connection lost!")    

    @staticmethod
    def get_points():
        try:
            return GeoPoints.query.all()
        except sqlalchemy.exc.OperationalError:
            logging.error("Database connection lost!")

    @staticmethod
    def get_def_segments():
        try:
            return Segments.query.filter(Segments.tourist_id==None).all()
        except sqlalchemy.exc.OperationalError:
            logging.error("Database connection lost!")    

    @staticmethod
    def get_def_points():
        try:
            return GeoPoints.query.all()
        except sqlalchemy.exc.OperationalError:
            logging.error("Database connection lost!")

    @staticmethod
    def get_points():
        try:
            return GeoPoints.query.all()
        except sqlalchemy.exc.OperationalError:
            logging.error("Database connection lost!")
    
    @staticmethod
    def get_users():
        try:
            return Tourists.query.all()
        except sqlalchemy.exc.OperationalError:
            logging.error("Database connection lost!")
    
    @staticmethod
    def get_user_by_name(username):
        try:
            return Tourists.query.filter(Tourists.login == username).first()
        except sqlalchemy.exc.OperationalError:
            logging.error("Database connection lost!")
    
    @staticmethod
    def get_user_by_id(id):
        try:
            return Tourists.query.filter(Tourists.id == id).first()
        except sqlalchemy.exc.OperationalError:
            logging.error("Database connection lost!")

    @staticmethod
    def get_user_book_entries(usr_id):
        try:
            return Tourists.query.filter(Tourists.book_id == usr_id).join(Books, Tourists.book_id == Books.serial_number).join(BooksEntries, BooksEntries.book_id == Books.serial_number).join(TripsOfTourists, TripsOfTourists.id == BooksEntries.trip_of_tourist_id).join(Trips, Trips.id == TripsOfTourists.trip_id).join(RoutesInTrips, Trips.id == RoutesInTrips.trip_id).join(MountainRoutes, MountainRoutes.id == RoutesInTrips.route_id).join(SegmentsInRoutes, SegmentsInRoutes.route_id == MountainRoutes.id).join(Segments, Segments.id == SegmentsInRoutes.segment_id).add_columns(BooksEntries.entry_date, Segments.points, Segments.starting_point_id, Segments.ending_point_id).all()
        except sqlalchemy.exc.OperationalError:
            logging.error("Database connection lost!")

    @staticmethod
    def get_point_by_id(id):
        try:
            return GeoPoints.query.filter(GeoPoints.id == id).first()
        except sqlalchemy.exc.OperationalError:
            logging.error("Database connection lost!")

