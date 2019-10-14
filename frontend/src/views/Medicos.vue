<template>
    <div class="container">
        <h1>Medicos</h1>
        <b-alert
            :show="dismissCountDown"
            dismissible
            :variant="mensaje.color"
            @dismissed="dismissCountDown=0"
            @dismiss-count-down="countDownChanged"
         >
          {{mensaje.texto}}
         </b-alert>
            <form @submit.prevent="agregarMedico()">
                <h3>agregar nuevo medico</h3>
                <input type="text" class="form-control my-2" placeholder="Nombre" v-model="medico.nombre">
                <input type="text" class="form-control my-2" placeholder="Rut" v-model="medico.rut">
                <b-button class="btn-success my-2 btn-block" type="submit">Agregar</b-button>
            </form>



        <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Rut</th>
                <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in medicos" :key="index">
                <th scope="row">{{item._id}}</th>
                <td>{{item.nombre}}</td>
                <td>{{item.rut}}</td>
                <td>
                    <!-- <b-button @click="alerta()">accion</b-button> -->
                    <b-button @click="eliminarMedico(item._id)" class="btn-danger">eliminar</b-button>
                </td>
                </tr>    
            </tbody>
        </table>
    
    </div>
</template>

<script>
export default {
    data(){
        return{
            medicos:[],
             dismissSecs: 5,
             dismissCountDown: 0,
             mensaje:{color:'',texto:''},
             medico:{nombre:'',rut:''}


        }

    },
    created(){
        this.listarMedicos();

    },
    methods:{
        alerta(){
            this.mensaje.color = 'success'
            this.mensaje.texto = 'probando alerta'
            this.showAlert();
        },
        listarMedicos(){
            this.axios.get('/medico')
            .then(res =>{
                console.log(res.data);
                this.medicos = res.data;
            })
            .catch(e =>{
                console.log(e.response);
            })
        },
        agregarMedico(){
            console.log(this.medico);
            this.axios.post('/nuevo-medico',this.medico)
            .then(res =>{
                this.medicos.push(res.data)
                this.medico.nombre = '';
                this.medico.rut = '';
                this.mensaje.color = 'success'
                this.mensaje.texto = 'medico agregado'
                this.showAlert()
            })
            .catch(e => {
                console.log(e.response);
                if(e.response.data.error.errors.nombre.message){
                    this.mensaje.texto = e.response.data.error.errors.nombre.message
                }else{
                    this.mensaje.texto = 'error del sistema';
                }
                this.mensaje.color = 'danger'
                this.showAlert()
            })
        },
        eliminarMedico(id){
            this.axios.delete(`medico/${id}`)
                .then(res => {
                const index = this.medicos.findIndex( item => item._id === res.data._id )
                this.medicos.splice(index, 1);

                this.showAlert();
                this.mensaje.texto = 'Medico Eliminada!'
                this.mensaje.color = 'danger'
                })
                .catch( e => {
                console.log(e.response);
                })
        },

        countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
        },
        showAlert() {
         this.dismissCountDown = this.dismissSecs
        }
    }
}
</script>