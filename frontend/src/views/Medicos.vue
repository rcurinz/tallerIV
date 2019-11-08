<template  >

    <!-- container -->
    <div class="container">
        <div class="row justify-content-center">

            <div class="col-xl-6 col-lg-12 col-md-9">

                <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
                                
                        <div class="row">
                                
                            <div class="col-lg-12">
                                <div class="p-5">
                                        <div class="text-center">
                                            <h1 class="h4 text-gray-900 mb-4">Iniciar Sesión</h1>
                                        </div> 
                                           

                                        <b-alert :show="dismissCountDown" dismissible :variant="mensaje.color" @dismissed="dismissCountDown=0"  @dismiss-count-down="countDownChanged"  >
                                            {{mensaje.texto}}
                                        </b-alert>
                                        
                                                     

                                        <form class="user" @submit.prevent="editarMedico()" v-if="editar">                                                
                                            <div class="form-group">
                                                <input type="text" id="Rut" class="form-control form-control-user" placeholder="rut" v-model="medicoEditar.nombre">
                                            </div>
                                            <div class="form-group">
                                                <input type="password" id="Clave" class="form-control form-control-user" placeholder="clave" v-model="medicoEditar.rut">
                                            </div> 
                                            <b-button  class="btn btn-info  btn-block rounde" type="submit">Login</b-button>                                                                                                        
                                        </form>                                            
                                            
                                </div>
                            </div>
                        </div>                    
                    </div>                 
                </div>
            </div>
        </div>       
    <!-- end container -->
    </div>
</template>

<script>
import router from '../router.js'
export default {
    data(){
        return{
            medicos:[],
             dismissSecs: 5,
             dismissCountDown: 0,
             mensaje:{color:'',texto:''},
             medico:{nombre:'',rut:''},
             editar:true,
             ver:true,
             medicoEditar:{}

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

        activarEdicion(id){
            this.editar = true;
            console.log(id)
            this.axios.get(`medico/${id}`)
                .then(res =>{
                    // this.medicoEditar= res.data;
                    

                })
                .catch(e =>{
                    console.log(e.response);
                })

        },
        editarMedico(){
            //console.log(Rut.value)
            this.axios.get(`medico/${Rut.value}`)
                .then(res =>{ 
                                  
                    if(res.data.passwd == Clave.value){
                       // this.$router.push({path: '/in'})
                        this.$router.push({path: '/editor1'})
                        //window.location.href ='./index.html';
                        // location.href="./index.html";
                         this.ver=false;
                         this.mensaje.color = 'success';
                         this.mensaje.texto = 'datos corerctos';
                         this.showAlert();
                    }                                
                    else{
                        this.mensaje.color = 'danger';
                        this.mensaje.texto = 'datos incorrectos';
                        this.showAlert();
                        console.log('distintos')
                    }                   

                })
                .catch(e =>{
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