from app import ma


class TrialColorsSchema(ma.Schema):
    class Meta:
        fields = ('name',)

trial_color_schema = TrialColorsSchema()
trial_colors_schema = TrialColorsSchema(many=True)

class LanguagesSchema(ma.Schema):
    class Meta:
        fields = ('name',)

language_schema = LanguagesSchema()
languages_schema = LanguagesSchema(many=True)

class BooksSchema(ma.Schema):
    class Meta:
        fields = ('serial_number',)

book_schema = BooksSchema()
books_schema = BooksSchema(many=True)

class TouristsSchema(ma.Schema):
    class Meta:
        fields = ('id', 'last_name', 'name','login', 'password', 'email', 'age', 'preferred_lang', 'book')
    
    book = ma.Nested(BooksSchema)

tourist_schema = TouristsSchema()
tourists_schema = TouristsSchema(many=True)