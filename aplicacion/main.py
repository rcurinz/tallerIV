from flask import Blueprint

from .extensions import mongo 

main = Blueprint('main', __name__)

@main.route('/')
def index():
    user_collection = mongo.db.medico
    user_collection.insert({'name' : 'rosa'})
    user_collection.insert({'name' : 'pepe'})
    return '<h1>Added a User!</h1>'

	
Prueba
"""
 tutorial:

https://www.youtube.com/watch?v=3ZS7LEH_XBg 
"""