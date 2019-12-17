<template>
  <div id="app">
    <h1> Editor de Arqueotipos</h1>
    <div class="tool-wrapper">
      <select v-model="newNodeType">
        <option v-for="(item, index) in nodeCategory" :key="index" :value="index">{{item}}</option>
      </select>
      <input type="text" v-model="newNodeLabel" placeholder="Input node label">
      <button @click="addNode">ADD</button>
    </div>
        <div class="col " style="background-color:White;"> <!-- columna 2 -->
             <form >
                <div class="form-row float-right">
                  <div class="col-5">
                     <input type="text" v-model="tex" class="form-control" placeholder="texto..." value="">
                     <hr>
                     
                  </div>
                  <div class="col">
                    <b-button  class=" form-control btn btn-info  btn-circle "  @click="CmbiarText(tex)">ok</b-button>
                    <hr> 
                                                                                                                            
                  </div>
                          
                </div>
              </form>         

                      
        </div> <!-- fin columna 2 -->
    
    <simple-flowchart :scene.sync="scene" 
      @nodeClick="nodeClick"
      @nodeDelete="nodeDelete"
      @linkBreak="linkBreak"
      @linkAdded="linkAdded"
      @canvasClick="canvasClick"
      :height="800"/>
  </div>
</template>

<script>
import SimpleFlowchart from '../components/SimpleFlowchart'

export default {
  name: 'app',
  components: {
    SimpleFlowchart
  },
  data() {
    return {
      scene: {
        centerX: 1024,
        centerY: 140,
        scale: 1,
        nodes: [
          {
            id: 2,
            x: -700,
            y: -69,
            type: 'Action',
            label: 'test1',
          },
          {
            id: 4,
            x: -357,
            y: 80,
            type: 'Script',
            label: 'test2',
          },
          {
            id: 6,
            x: -557,
            y: 80,
            type: 'Rule',
            label: 'test3',
          }
        ],
        links: [
          {
            id: 3,
            from: 2, // node id the link start
            to: 4,  // node id the link end
          }
        ]
      },
      newNodeType: 0,
      newNodeLabel: '',
      editNodeLabel:'',
      nodeCategory:[
        'rule',
        'action',
        'script',
        'decision',
        'fork',
        'join',
      ],
    }
  },
  methods: {
    canvasClick(e) {
      console.log('canvas Click, event:', e)
    },
    addNode() {
      let maxID = Math.max(0, ...this.scene.nodes.map((link) => {
        return link.id
      }))
      this.scene.nodes.push({
        id: maxID + 1,
        x: -400,
        y: 50,
        type: this.nodeCategory[this.newNodeType],
        label: this.newNodeLabel ? this.newNodeLabel: `test${maxID + 1}`,
      })
    },
    nodeClick(id, label) {
      console.log('node click', id, label);
    },
    nodeDelete(id) {
      console.log('node delete', id);
    },
    linkBreak(id) {
      console.log('link break', id);
    },
    linkAdded(link) {
      console.log('new link added:', link);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  overflow: hidden;
  height: 800px;
}
  .tool-wrapper>{
    position: relative;
  }

  .tools-nodos{
    border:1px solid;
    height: 200px;
    width: 200px;
    background-color: red
  }
</style>
