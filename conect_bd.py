import pymongo
from pymongo import MongoClient

#holaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
#chaooooooooooo
class Conector:
    def __init__(self):
        self.mongoClient = MongoClient("mongodb://rele:1234@201.239.71.43:27017/talleriv")
        self.db = self.mongoClient.talleriv

    def consultas(self, coleccion):
        users = self.db.medico
        cursor = users.find()
        for fut in cursor:
            print (fut)

    def agregarMedico(self, rut,nombre, passwd,esp, fono, email):
        users = self.db.medico
        dostor = {
            'rut': rut,
            'name': nombre,
            'passwd':passwd,
            'especialidad':esp,
            'telefono': fono,
            'email': email
        }
        users.insert_one(dostor)

    def eliminarMedico(self,Rut):
        user= self.db.medico
        user.delete_one({"rut":Rut})

    def encontrar(self, Nombre, Passwd):
        users = self.db.medico
        va = users.find({"name": Nombre})

        for x in va:
            if (x['passwd'] != Passwd):
                print("error de datos")
            else:
                print("datos correctos")





con = Conector()
#con.consultas("medico")
#con.agregarMedico("1111", "lesly", "1234","dormir","696969696","que@te.importa")
#con.eliminarMedico("186729137")
#con.encontrar("lesly","12334")