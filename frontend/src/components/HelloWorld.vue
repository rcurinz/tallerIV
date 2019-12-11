<template>
  <div>
    <kendo-diagram
      :data-source="dataSource"
      :connections-data-source="connectionsDataSource"
      :layout-type="'tree'"
      :layout-subtype="'right'"
      @click="mostrar">
    </kendo-diagram>
    
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  
  data:function() {
    return {
      getID:"7777",
      dataSource: [
        { id: "one", name: "One"},
        { id: "two", name: "Two" },
        { id: "five", name: "Five" },
        { id: "seis", name: "Seis" },
      ],
      connectionsDataSource: [
        { from: "one", to: "two", label: "plus one" },
        { from: "one", to: "five", label: "plus three" }
      ]
    };
  },
  methods:{
    mostrar(){
      console.log(this.dataSource.id)
      

    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
