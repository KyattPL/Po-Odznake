from flask_marshmallow import Marshmallow

ma = Marshmallow()


class BooksSchema(ma.Schema):
    class Meta:
        fields = ('serial_number',)

class TouristsSchema(ma.Schema):
    class Meta:
        fields = ('id','login', 'password', 'email')


class PointsSchema(ma.Schema):
    class Meta:
        fields = ('id','name','description','latitude', 'longitude', 'exists', 'height')

class SegmentsSchema(ma.Schema):
    class Meta:
        fields = ('id','points', 'description', 'is_active', 'distance', 'trial_color', 'starting_point', 'ending_point')

    starting_point = ma.Nested(PointsSchema)
    ending_point = ma.Nested(PointsSchema)

class TripsSchema(ma.Schema):
    class Meta:
        fields = ('id', 'starting_point', 'ending_point', 'start_date', 'end_date')

    starting_point = ma.Nested(PointsSchema)
    ending_point = ma.Nested(PointsSchema)

class BookEntriesSchema(ma.Schema):
    class Meta:
        fields = ('id', 'trip', 'entry_date')
    
    trip = ma.Nested(TripsSchema)
    

class Schemas():
    book_schema = BooksSchema()
    books_schema = BooksSchema(many=True)
    tourist_schema = TouristsSchema()
    tourists_schema = TouristsSchema(many=True)
    point_schema = PointsSchema()
    points_schema = PointsSchema(many=True)
    segment_schema = SegmentsSchema()
    segments_schema = SegmentsSchema(many=True)
    trip_schema = TripsSchema()
    trips_schema = TripsSchema(many=True)
    book_entry_schema = BookEntriesSchema()
    book_entries_schema = BookEntriesSchema(many=True)


