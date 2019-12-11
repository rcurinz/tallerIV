<template>
 <div id="app">
      <cabecera></cabecera>
      
      <div class="row">
        <div class="col-10" > <!-- columna 1 -->
                  
          <HelloWorld></HelloWorld>

               


        </div> <!-- fin columna  -->

        <div class="col " style="background-color:White;"> <!-- columna 2 -->
             <form >
                <div class="form-row float-right">
                  <div class="col-5">
                     <input type="text" v-model="tex" class="form-control" placeholder="texto...">
                     <hr>
                     
                  </div>
                  <div class="col">
                    <b-button  class=" form-control btn btn-info  btn-circle "  @click="CmbiarText(tex)">ok</b-button>
                    <hr> 
                                                                                                                            
                  </div>
                          
                </div>
              </form>         

                      
        </div> <!-- fin columna 2 -->
      </div>




      
    </div> 
  
                
          
  
  
</template>

<script>
import  cabecera from '../components/cabecera.vue'
import HelloWorld from "../components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld,
    cabecera
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
}
</style>
