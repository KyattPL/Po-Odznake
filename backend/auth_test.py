import threading
import time
import unittest

import db_models
from auth import authenticate
from unittest import mock


@mock.patch("queries.DBAccess.get_user_by_name", return_value=db_models.Tourists("ASDAs", "XSD", "kruci12", "secret_password", "foo@bar.ff", 24, None))
@mock.patch("auth.login_user")
class TestAuthenticate(unittest.TestCase):

    def test_valid_data(self, mock_user, mock_login):
        self.assertEqual(authenticate("kruci12", "secret_password"), True)
    
    def test_invalid_data(self, mock_user, mock_login):
        self.assertEqual(authenticate("kruci12", "sdffgdgd"), False)
    
    def test_wrong_username_type(self, mock_user, mock_login):
        self.assertRaises(TypeError, authenticate, 32424.45, "sdfsgffd")
    
    def test_wrong_password_type(self, mock_user, mock_login):
        self.assertRaises(TypeError, authenticate, "bob", 243254)
    
    def test_wrong_cred_type(self, mock_user, mock_login):
        self.assertRaises(TypeError, authenticate, 435.4654, 243254)

