from backend.db_models import *

class DBAccess():
    @staticmethod
    def all_segments(usr_id):
        return Segments.query.filter(Segments.tourist_id==usr_id or Segments.tourist_id==None).all()
    
    @staticmethod
    def all_points():
        return GeoPoints.query.all()
