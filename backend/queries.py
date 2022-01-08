from db_models import *

class DBAccess():

    @staticmethod
    def get_segments(usr_id):
        return Segments.query.filter(Segments.tourist_id==usr_id or Segments.tourist_id==None).all()
    
    @staticmethod
    def get_points():
        return GeoPoints.query.all()
    
    @staticmethod
    def get_users():
        return Tourists.query.all()
    
    @staticmethod
    def get_user_by_name(username):
        return Tourists.query.filter(Tourists.login == username).first()
    
    @staticmethod
    def get_user_by_id(id):
        return Tourists.query.filter(Tourists.id == id).first()

