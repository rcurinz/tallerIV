import pymongo
from pymongo import MongoClient

#holaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
class Conector:
    def __init__(self):
        self.mongoClient = MongoClient("mongodb://rele:1234@201.239.71.43:27017/talleriv")
        self.db = self.mongoClient.talleriv

    def consultas(self, coleccion):
        users = self.db.medico
        cursor = users.find()
        for fut in cursor:
            print (fut)

    def agregarMedico(self, rut,nombre, esp, fono, email):
        users = self.db.medico
        dostor = {
            'rut': rut,
            'nombre': nombre,
            'especialidad':esp,
            'telefono': fono,
            'email': email
        }
        users.insert_one(dostor)

con = Conector()
con.consultas("medico")
con.agregarMedico("186729137", "rene", "dormir","696969696","que@te.importa")
