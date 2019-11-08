<template>
    <!-- esta pagina carga un archivo xml y lo combierte en json -->
	<div id="app">
        
      
    <textarea rows="10" cols="100" v-model="text"></textarea>
   
    <br>
		<text-reader  @load="text = $event"></text-reader>
         <b-button  class="text-reader btn btn-info rounde"  @click="mostrar()">convertir a json</b-button>
	</div>

    
</template>

<script>
import TextReader from "./TextReader";

export default {
  name: "app",
  data: () => ({ text: "" }),
  components: {
    TextReader
  },
methods: {
    mostrar(){
               
        //console.log(this.text);
        var convert = require('xml-js');         
        var xml = this.text;


           
            var result1 = convert.xml2json(xml, {compact: true, spaces: 4});
            var result2 = convert.xml2json(xml, {compact: false, spaces: 4});
            console.log(result1,'\n  hoaaa', result2);


    },
     /* leer(){
            var convert = require('xml-js');
            var xml =
            '<?xml version="1.0" encoding=""ISO-8859-1"?>' +
            '<arquetipo>' +
                '<nombre>Resiracion</nombre>' +
                
                '<nodo-1>' +
                    '<nombre>data</nombre>' +
                    
                   ' <subnodo-1>presence</subnodo-1>' +
                   ' <subnodo-2>rate</subnodo-2>' +
                   ' <subnodo-3>regulaity</subnodo-3>' +
               '</nodo-1>' +
                
                
                '<nodo-2>' +
                    '<nombre>descripcion</nombre>' +
                    
                    '<subnodo-1>concept description</subnodo-1>' +
                    '<subnodo-2>purpose</subnodo-2>' +
                    '<subnodo-3>use</subnodo-3>' +
                    
                '</nodo-2>' +
                
                '<nodo-3>' +
                    '<nombre>attribution</nombre>' +
                    
                   '<subnodo-1>archetype ID</subnodo-1>' +
                    '<subnodo-2>other identificatoin</subnodo-2>' +
                    '<subnodo-3>original autor</subnodo-3>' +
                '</nodo-3>' +	
                
            '</arquetipo>';



           
            var result1 = convert.xml2json(xml, {compact: true, spaces: 4});
            var result2 = convert.xml2json(xml, {compact: false, spaces: 4});
            console.log(result1,'\n  hoaaa', result2);

        },
 */

}

};
</script>
