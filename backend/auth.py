from flask_jwt import JWT, jwt_required, current_identity
from werkzeug.security import safe_str_cmp
from queries import DBAccess
from flask_login import LoginManager, login_user, logout_user, current_user
import hashlib

def authenticate(username, password):
    user = DBAccess.get_user_by_name(username)
    sha_engine = hashlib.sha256()
    sha_engine.update(password.encode('utf-8'))
    if user and safe_str_cmp(user.password, sha_engine.hexdigest().encode('utf-8')):
        return user

def identity(payload):
    user_id = payload['identity']
    user = DBAccess.get_user_by_id(user_id)
    if user:
        return user


jwt = JWT()
jwt.authentication_callback = authenticate
jwt.identity_callback = identity