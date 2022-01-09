from db_models import *

class DBAccess():

    @staticmethod
    def get_segments(usr_id):
        return Segments.query.filter(Segments.tourist_id==usr_id or Segments.tourist_id==None).all()
    
    @staticmethod
    def add_segment(points, description, distance, trial_color, point_A_id, point_B_id, usr_id):
        seg_A_B = Segments(points, description, True, distance, trial_color, point_A_id, point_B_id, usr_id)
        seg_B_A = Segments(points, description, True, distance, trial_color, point_A_id, point_B_id, usr_id)
        db.session.add(seg_A_B)
        db.session.add(seg_B_A)
        db.session.commit()

    @staticmethod    
    def delete_segment(point_A_id, point_B_id):
        segs_to_del = Segments.query.filter(Segments.starting_point_id == point_A_id and Segments.ending_point_id == point_B_id or Segments.ending_point_id == point_A_id and Segments.starting_point_id == point_B_id)

        for seg in segs_to_del:
            db.session.delete(seg)
        db.session.commit()
    
    @staticmethod
    def update_segment(point_A_id, point_B_id, new_point_A_id, new_point_B_id):
        segs_to_upd = Segments.query.filter(Segments.starting_point_id == point_A_id and Segments.ending_point_id == point_B_id or Segments.ending_point_id == point_A_id and Segments.starting_point_id == point_B_id)

        segs_to_upd[0].starting_point_id = new_point_A_id
        segs_to_upd[0].ending_point_id = new_point_B_id
        segs_to_upd[1].starting_point_id = new_point_B_id
        segs_to_upd[1].ending_point_id = new_point_A_id

        db.session.commit()
    @staticmethod
    def add_route(segments):
        rt = MountainRoutes()
        db.session.add(rt)
        for seg in segments:
            seg_in_rt = SegmentsInRoutes(seg.id, rt.id)
            db.session.add(seg_in_rt)
        db.session.commit()

    @staticmethod
    def get_points():
        GeoPoints.query.all()

    @staticmethod
    def get_def_segments():
        return Segments.query.filter(Segments.tourist_id==None).all()

    @staticmethod
    def get_def_points():
        return GeoPoints.query.all()

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

