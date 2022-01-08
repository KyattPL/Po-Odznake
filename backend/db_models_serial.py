from flask_marshmallow import Marshmallow

ma = Marshmallow()

class TrialColorsSchema(ma.Schema):
    class Meta:
        fields = ('name',)

class BooksSchema(ma.Schema):
    class Meta:
        fields = ('serial_number',)

class TouristsSchema(ma.Schema):
    class Meta:
        fields = ('id','login', 'password', 'email')

class Schemas():
    trial_color_schema = TrialColorsSchema()
    trial_colors_schema = TrialColorsSchema(many=True)
    book_schema = BooksSchema()
    books_schema = BooksSchema(many=True)
    tourist_schema = TouristsSchema()
    tourists_schema = TouristsSchema(many=True)
