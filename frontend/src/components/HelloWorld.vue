<template>
  <div>
        <kendo-hierarchicaldatasource ref="shapesDataSource"
                                  :batch='false'
                                  :transport-read-url="'https://demos.telerik.com/kendo-ui/service/DiagramShapes'"
                                  :transport-read-data-type="'jsonp'"
                                  :transport-update-url="'../components/Lista'"
                                  :transport-update-data-type="'jsonp'"
                                  :transport-destroy-url="'https://demos.telerik.com/kendo-ui/service/DiagramShapes/Destroy'"
                                  :transport-destroy-data-type="'jsonp'"
                                  :transport-create-url="'https://demos.telerik.com/kendo-ui/service/DiagramShapes/Create'"
                                  :transport-create-data-type="'jsonp'"
                                  :transport-parameter-map="parameterMap"
                                  :schema-model-id="'id'"
                                  :schema-model-fields="schemaModelFields">
    </kendo-hierarchicaldatasource>
    <kendo-diagram
      :data-source="dataSource"
      :connections-data-source="connectionsDataSource"
      :layout-type="'tree'"
      :layout-subtype="'right'"
      :shape-defaults-visual="visualTemplate"
      :shape-defaults-content-template="shapesContentTemplate"
      :shape-defaults-content-font-size="shapesContentFontSize"
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
      ],
      schemaModelFields:  {
                id: { from: "Id", type: "number", editable: false },
                JobTitle: { type: "string" },
                Color: { type: "string" }
            },
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
