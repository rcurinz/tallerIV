<template>
  <div class="container">
    
    <vue-mermaid :nodes="data" type="graph LR" @nodeClick="editNode"></vue-mermaid>
   <h1>hola</h1>
  </div>
</template>

<script>
//import  cabecera from '../lib/index.js'
export default {
  data:function(){
    return {
      data:[
        {id:'1',text:'A',link:'---',next:['2'],editable:true},
        {id:'2',text:'B',edgeType:'circle',next:['3']},
        {id:'3',text:'C',next:['4','6']},
        {id:'4',text:'D',link:'-- This is the text ---',next:['5']},
        {id:'5',text:'E'},
        {id:'6',text:'F'}
      ]
    }
  },
  methods:{
    editNode(nodeId) {
     alert(nodeId);
    },
  }
}



</script>
