from app import ma


class TrialColorsSchema(ma.Schema):
    class Meta:
        fields = ('name',)

trial_color_schema = TrialColorsSchema()
trial_colors_schema = TrialColorsSchema(many=True)


class BooksSchema(ma.Schema):
    class Meta:
        fields = ('serial_number',)

book_schema = BooksSchema()
books_schema = BooksSchema(many=True)

class TouristsSchema(ma.Schema):
    class Meta:
        fields = ('id','login', 'password', 'email')

tourist_schema = TouristsSchema()
tourists_schema = TouristsSchema(many=True)