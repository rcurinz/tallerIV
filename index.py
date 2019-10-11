from flask import Flask, render_template, redirect, url_for, request,  escape, session
import conect_bd as con
import pymongo
app = Flask(__name__)

conex = con.Conector()



@app.route("/")
def index():
   return render_template("login.html")

@app.route("/login" ,methods = ['POST', 'GET'])
def validar():

    if request.method == 'POST':
       rut = request.form['id']
       clave = request.form['clave']
       valor = encontrar(rut,clave)
       if(valor== True):
           print("datos correctos")
           return render_template("index.html")
       else:
           Mensaje='datos incorrectos'
           print("datos erroneos")
           return render_template("/login.html", mensaje=Mensaje)


def encontrar(Rut, Passwd):
    users = conex.db.medico
    va = users.find({"rut": Rut})
    for x in va:
        if (x['passwd'] != Passwd):
            return False
        else:
            return True





if __name__ == '__main__':
   app.run(debug = True)