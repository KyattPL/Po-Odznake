
from flask_jwt import JWT, jwt_required, current_identity
from werkzeug.local import F
from werkzeug.security import safe_str_cmp
from queries import DBAccess
from flask_login import LoginManager, login_user, logout_user, current_user
import hashlib

login_manager = LoginManager()

user_list = []

@login_manager.user_loader
def load_user(user_id):
    for usr in user_list:
        if usr.id == user_id:
            return usr
    return None

def authenticate(username, password):
    if type(username) != str or type(password) != str:
        raise TypeError("Username and password must be strings")
    user = DBAccess.get_user_by_name(username)
    sha_engine = hashlib.sha256()
    sha_engine.update(password.encode('utf-8'))
    #print(sha_engine.hexdigest().encode('utf-8'))
    #print(password)
    if user and safe_str_cmp(user.password, sha_engine.hexdigest().encode('utf-8')):
        new_user = User(username, password, user.id)
        new_user.authenticated = True
        user_list.append(new_user)
        login_user(new_user)
        return True
    return False


class User():

    def __init__(self, username, password, id):
        self.username = username
        self.password = password
        self.id = id
        self.authenticated = False
    
    
    def is_authenticated(self):
        return self.authenticated
    
    def is_active(self):
        return True

    def is_anonymous(self):
        return False

    def get_id(self):
        return self.id


