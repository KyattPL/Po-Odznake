import unittest
import db_models
from datetime import date
class GeoPointConstrTest(unittest.TestCase):
    def test_valid_data(self):
        self.assertIsInstance(db_models.GeoPoints("Pewien punkt","Wysoki szczyt", 45.5454345,-50.08, True, 1200), db_models.GeoPoints)
    def test_invalid_type_n(self):
        self.assertRaises(TypeError, db_models.GeoPoints, 2312, "Wysoki szczyt", 45.5454345,-50.08, True, 1200)
    def test_invalid_type_d(self):
        self.assertRaises(TypeError, db_models.GeoPoints, "Pewien punkt", True, 45.5454345,-50.08, True, 1200)
    def test_invalid_type_la(self):
        self.assertRaises(TypeError, db_models.GeoPoints, "Pewien punkt", "Wysoki szczyt", "45.5454345",-50.08, True, 1200)
    def test_invalid_type_lo(self):
        self.assertRaises(TypeError, db_models.GeoPoints, "Pewien punkt", "Wysoki szczyt", 45.5454345,"324.24", True, 1200)
    def test_invalid_type_a(self):
        self.assertRaises(TypeError, db_models.GeoPoints, "Pewien punkt", "Wysoki szczyt", 45.5454345,-50.08, 65, 1200)
    def test_invalid_type_h(self):
        self.assertRaises(TypeError, db_models.GeoPoints, "Pewien punkt", "Wysoki szczyt", 45.5454345,-50.08, True, "1200")
    def test_height_too_small(self):
        self.assertRaises(ValueError, db_models.GeoPoints, "Pewien punkt", "Wysoki szczyt", 45.5454345,-50.08, True, -1200)
    def test_height_too_high(self):
        self.assertRaises(ValueError, db_models.GeoPoints, "Pewien punkt", "Wysoki szczyt", 45.5454345,-50.08, True, 100000)
    def test_name_too_long(self):
        self.assertRaises(ValueError, db_models.GeoPoints, "Pewien punkt gfhfghf gfhgfhgfhtryrytryfghh", "Wysoki szczyt", 45.5454345,-50.08, True, 1000)
    def test_desc_too_long(self):
        self.assertRaises(ValueError, db_models.GeoPoints, "Pewien punkt", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porta blandit arcu, sed scelerisque sapien semper ac. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent ac tristique orci. Quisque auctor nulla quis molestie cursus. Pellentesque viverra interdum nisl, eget tincidunt ligula vestibulum sed. Praesent eleifend, mi nec ultricies euismod, tellus ipsum vestibulum arcu, sit amet interdum ipsum orci id neque. Donec venenatis tincidunt lorem in fermentum. Sed vehicula augue id turpis pretium elementum. Maecenas et dignissim nisi. Aliquam in bibendum nulla, sit amet consequat tortor. Donec vitae venenatis metus. Aliquam non facilisis tellus. In hac habitasse platea dictumst. Sed et ligula ultrices velit tincidunt suscipit.", 45.5454345,-50.08, True, 1000)
    def test_lat_too_small(self):
        self.assertRaises(ValueError, db_models.GeoPoints, "Pewien punkt", "Wysoki szczyt", -845.5454345,-50.08, True, 1200)
    def test_lat_too_high(self):
        self.assertRaises(ValueError, db_models.GeoPoints, "Pewien punkt", "Wysoki szczyt", 645.5454345,-50.08, True, 1000)
    def test_lon_too_small(self):
        self.assertRaises(ValueError, db_models.GeoPoints, "Pewien punkt", "Wysoki szczyt", 45,-850.08, True, 1200)
    def test_lon_too_high(self):
        self.assertRaises(ValueError, db_models.GeoPoints, "Pewien punkt", "Wysoki szczyt", 45,9850.08, True, 1000)

class BookConstrTest(unittest.TestCase):
    def test_valid_data(self):
        self.assertIsInstance(db_models.Books(3242342), db_models.Books)
    def test_invalid_type_sn(self):
        self.assertRaises(TypeError, "dsfsfgf")

class TouristConstrTest(unittest.TestCase):
    #def
    def test_valid_data_1(self):
        self.assertIsInstance(db_models.Tourists("Jan","Nowak","janes12","mahama4ka3", "jan.tz@op.pl", 23, 4000), db_models.Tourists)
    def test_valid_data_2(self):
        self.assertIsInstance(db_models.Tourists("Jan","Nowak","janes12","mahama4ka3", "jan.tz@op.pl", 23, None), db_models.Tourists)
    def test_invalid_type_n(self):
        self.assertRaises(TypeError, db_models.Tourists, 34.76,"Nowak","janes12","mahama4ka3", "jan.tz@op.pl", 23, 4000)
    def test_invalid_type_ln(self):
        self.assertRaises(TypeError, db_models.Tourists, "Jan",True,"janes12","mahama4ka3", "jan.tz@op.pl", 23, 4000)
    def test_invalid_type_lg(self):
        self.assertRaises(TypeError, db_models.Tourists, "Jan","Nowak",self.test_valid_data_1,"mahama4ka3", "jan.tz@op.pl", 23, 4000)
    def test_invalid_type_p(self):
        self.assertRaises(TypeError, db_models.Tourists, "Jan","Nowak","janes12",-75, "jan.tz@op.pl", 23, 4000)
    def test_invalid_type_e(self):
        self.assertRaises(TypeError, db_models.Tourists, "Jan","Nowak","janes12","mahama4ka3", False, 23, 4000)
    def test_invalid_type_age(self):
        self.assertRaises(TypeError, db_models.Tourists, "Jan","Nowak","janes12","mahama4ka3", "jan.tz@op.pl", "23", 4000)
    def test_invalid_type_bi(self):
        self.assertRaises(TypeError, db_models.Tourists, "Jan","Nowak","janes12","mahama4ka3", "jan.tz@op.pl", 23, "4000")
    def test_name_too_long(self):
        self.assertRaises(ValueError, db_models.Tourists, "JanOLKOAMDOAKSOAMDMNKZNSJAIDNSAODSANDISAMND","Nowak","janes12","mahama4ka3", "jan.tz@op.pl", 23, 4000)
    def test_last_name_too_long(self):
        self.assertRaises(ValueError, db_models.Tourists, "Jan","NowakPSAMKJCNIANDSUANCBNJZBSADBAIJDAIBRYASBN","janes12","mahama4ka3", "jan.tz@op.pl", 23, 4000)
    def test_login_too_long(self):
        self.assertRaises(ValueError, db_models.Tourists, "Jan","Nowak","janes12JNANHDBZHUASDBSCZNSADBASB","mahama4ka3", "jan.tz@op.pl", 23, 4000)
    def test_email_too_long(self):
        self.assertRaises(ValueError, db_models.Tourists, "Jan","Nowak","janes12","mahama4ka3", "jan.tzfggggggggggggggjjjjjjjjjjjjggggggbnmfghytugbvnvbn@op.pl", 23, 4000)
    def test_age_too_small(self):
        self.assertRaises(ValueError, db_models.Tourists, "Jan","Nowak","janes12","mahama4ka3", "jan.tz@op.pl", 3, 4000)
    def test_invalid_email(self):
        self.assertRaises(ValueError, db_models.Tourists, "Jan","Nowak","janes12","mahama4ka3", "jan.tzop.pl", 29, 4000)

class TripConstrTest(unittest.TestCase):
    def test_valid_data(self):
        self.assertIsInstance(db_models.Trips(324,357,23), db_models.Trips)
    def test_invalid_type_spid(self):
        self.assertRaises(TypeError, db_models.Trips, "PSDA", 345, 22)
    def test_invalid_type_epid(self):
        self.assertRaises(TypeError, db_models.Trips, 3, True, 22)
    def test_invalid_type_p(self):
        self.assertRaises(TypeError, db_models.Trips, 3, 54, 22.43)
    def test_points_too_small(self):
        self.assertRaises(ValueError,db_models.Trips, 324,357,-63)

class SegmentConstrTest(unittest.TestCase):
    def test_valid_data(self):
        self.assertIsInstance(db_models.Segments(24,"Very nice segment", True, 20000, 23, 54, None), db_models.Segments)
    def test_invalid_type_p(self):
        self.assertRaises(TypeError, db_models.Segments, "24","Very nice segment", True, 20000, 23, 54, None)
    def test_invalid_type_dsc(self):
        self.assertRaises(TypeError, db_models.Segments, 24, False, True, 20000, 23, 54, None)
    def test_invalid_type_ia(self):
        self.assertRaises(TypeError, db_models.Segments, 24, "fd", "True", 20000, 23, 54, None)
    def test_invalid_type_dst(self):
        self.assertRaises(TypeError, db_models.Segments, 24, "fd", True, 765.7863, 23, 54, None)
    def test_invalid_type_spid(self):
        self.assertRaises(TypeError, db_models.Segments, 24, "fd", True, 765, "23", 54, None)
    def test_invalid_type_epid(self):
        self.assertRaises(TypeError, db_models.Segments, 24, "fd", True, 765, 23, "54", None)
    def test_invalid_type_tid(self):
        self.assertRaises(TypeError, db_models.Segments, 24, "fd", True, 765, 23, 54, False)
    def test_points_too_small(self):
        self.assertRaises(ValueError, db_models.Segments, -24,"Very nice segment", True, 20000, 23, 54, None)
    def test_desc_too_long(self):
        self.assertRaises(ValueError, db_models.Segments, 24,"Very nice segmentdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffuytJNN NJANDBZBHDKSA MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMKB", True, 20000, 23, 54, None)
    def test_distance_too_small(self):
        self.assertRaises(ValueError, db_models.Segments, 24,"Very nice segmentB", True, -10, 23, 54, None)
    
class BookEntryConstrTest(unittest.TestCase):
    def test_valid_data(self):
        self.assertIsInstance(db_models.BooksEntries(242, 435, date(1997,7,25), date(2001,8,19)), db_models.BooksEntries)
    def test_invalid_type_tripid(self):
        self.assertRaises(TypeError, db_models.BooksEntries, "242", 463, date(1997,7,25), date(2001,8,19))
    def test_invalid_type_bid(self):
        self.assertRaises(TypeError, db_models.BooksEntries, 242, True, date(1997,7,25), date(2001,8,19))
    def test_invalid_type_ed(self):
        self.assertRaises(TypeError, db_models.BooksEntries, 242, 547, False, date(2001,8,19))
    def test_invalid_type_ed(self):
        self.assertRaises(TypeError, db_models.BooksEntries, 242, 547, date(1997,7,25), 32.654)
    def test_dates_corr(self):
        self.assertRaises(ValueError, db_models.BooksEntries, 242, 547, date(1997,7,25), date(1995,8,19))
    
class SegmentInRoutesConstrtest(unittest.TestCase):
    def test_valid_data(self):
        self.assertIsInstance(db_models.SegmentsInRoutes(4324,5364), db_models.SegmentsInRoutes)
    def test_invalid_type_sid(self):
        self.assertRaises(TypeError, db_models.SegmentsInRoutes, "242", 4636)
    def test_invalid_type_rid(self):
        self.assertRaises(TypeError, db_models.SegmentsInRoutes, 242, date(4346,4,2))
    