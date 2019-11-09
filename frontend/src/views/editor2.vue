<template>
    <div id="app" class="container">

        <cabecera></cabecera>
        <h3>hola     
        </h3>


        <input type="text">

        <Lista></Lista>
        

    </div>
    
</template>

<script>
import  cabecera from '../components/cabecera.vue'
import  Lista from '../components/Lista.vue'
export default {
  name: 'HelloWorld',
  components:{
      cabecera,
      Lista
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
