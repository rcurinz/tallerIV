<template>
  
        
    <!-- ejecutar= npm install vue-free-transform --save  -->   
    <div>
      <cabecera></cabecera>
      
      <div class="row">
        <div class="col" > <!-- columna 1 -->
                  


                <div class="workspace" ref="workspace">
                      <FreeTransform
                        v-for="element in elements"
                        :key="element.id"
                        :x="element.x"
                        :y="element.y"
                        :scale-x="element.scaleX"
                        :scale-y="element.scaleY"
                        :width="element.width"
                        :height="element.height"
                        :angle="element.angle"
                        :offset-x="offsetX"
                        :offset-y="offsetY"
                        :disable-scale="element.disableScale === true"
                        @update="update(element.id, $event);"
                      >
                        <div class="element" :style="getElementStyles(element)">
                          {{ element.text }}
                        </div>
                      </FreeTransform>
                    </div>


        </div> <!-- fin columna 1 -->

        <div class="col " style="background-color:White;"> <!-- columna 2 -->
             <form>
                <div class="form-row float-right">
                  <div class="col-9">
                     <input type="text" v-model="texto" class="form-control" placeholder=nombre>
                     <hr>
                     <input type="text" class="form-control" placeholder="texto...">
                  </div>
                  <div class="col">
                    <b-button  class=" form-control btn btn-info  btn-circle "  @click="mos(texto)">ok1</b-button>
                    <hr> 
                    <b-button  class=" form-control btn btn-info  btn-circle " type="submit">ok</b-button>                                                                                                          
                  </div>
                          
                </div>
              </form>         

                      
        </div> <!-- fin columna 2 -->
      </div>




      
    </div> 
  
                
          
  
</template>



<script>
import  cabecera from '../components/cabecera.vue'
import FreeTransform from "vue-free-transform";
import {mapState, mapMutations} from 'vuex';

export default {
  name: "app",
  components: {
    cabecera,
    FreeTransform
  },
   computed:{
      
      ...mapState(['Nodos'])
  },
 
  data() {
    return {
      elements: [
        {
          id: "el-1",
          x: 100,
          y: 50,
          scaleX: 1,
          scaleY: 1,
          width: 100,
          height: 100,
          angle: 0,
          classPrefix: "tr",
          styles: {
            background: "linear-gradient(135deg, #0FF0B3 0%,#036ED9 100%)"
          }
        },
        {
          id: "el-2",
          x: 225,
          y: 225,
          scaleX: 1,
          scaleY: 1,
          width: 100,
          height: 100,
          angle: 0,
          classPrefix: "tr2",
          text: "nodo1",
          styles: {
            padding: `5px`,
            background: "linear-gradient(135deg, #fad961 0%,#f76b1c 100%)"
          }
        },
        {
          id: "el-3",
          x: 100,
          y: 225,
          scaleX: 1,
          scaleY: 1,
          width: 100,
          height: 100,
          angle: 0,
          classPrefix: "tr2",
          text: "Scale Disabled",
          styles: {
            padding: 5,
            width: "100%",
            height: "100%",
            background: "linear-gradient(135deg, #fad961 0%,#f76b1c 100%)"
          },
          disableScale: true
        },
        {
          id: "el-4",
          x: 100,
          y: 400,
          scaleX: 1,
          scaleY: 1,
          width: 100,
          height: 100,
          angle: 45,
          classPrefix: "tr3",
          styles: {
            background: "linear-gradient(135deg, #b1ea4d 0%,#459522 100%)"
          }
        }
      ],
      offsetX: 0,
      offsetY: 0
    };
  },
  mounted() {
    this.offsetX = this.$refs.workspace.offsetLeft;
    this.offsetY = this.$refs.workspace.offsetTop;
  },
  methods: {
    ...mapMutations(['Pnodos']),
    mos(tex){
      console.log(tex)
    },

    update(id, payload) {
      this.elements = this.elements.map(item => {
        if (item.id === id) {
          return {
            ...item,
            ...payload
          };
        }
        return item;
      });
    },
    getElementStyles(element) {
      const styles = element.styles ? element.styles : {};
      return {
        width: `${element.width}px`,
        height: `${element.height}px`,
        ...styles
      };
    }
  }
};
</script>

<style>
#app {
  background:rgb(255, 255, 255);;
}

.wrapper {
  flex: 1;
}

.btn-circle {
  width: 40px;
  height: 40px;
  text-align: center;
  padding: 6px 0;
  font-size: 12px;
  line-height: 1.428571429;
  border-radius: 15px;
}

 .workspace {
  width: 1100px;
  height: 600px; 
  border: solid;
  background: #0283ce;
} 

* {
  box-sizing: border-box;
}

.tr-transform__content {
  user-select: none;
}

.tr-transform__rotator {
  top: -45px;
  left: calc(50% - 7px);
}

.tr-transform__rotator,
.tr-transform__scale-point {
  background: #fff;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  position: absolute;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.tr-transform__rotator:hover,
.tr-transform__scale-point:hover {
  background: #f1f5f8;
}

.tr-transform__rotator:active,
.tr-transform__scale-point:active {
  background: #dae1e7;
}

.tr-transform__scale-point {
}

.tr-transform__scale-point--tl {
  top: -7px;
  left: -7px;
}

.tr-transform__scale-point--ml {
  top: calc(50% - 7px);
  left: -7px;
}

.tr-transform__scale-point--tr {
  left: calc(100% - 7px);
  top: -7px;
}

.tr-transform__scale-point--tm {
  left: calc(50% - 7px);
  top: -7px;
}

.tr-transform__scale-point--mr {
  left: calc(100% - 7px);
  top: calc(50% - 7px);
}

.tr-transform__scale-point--bl {
  left: -7px;
  top: calc(100% - 7px);
}

.tr-transform__scale-point--bm {
  left: calc(50% - 7px);
  top: calc(100% - 7px);
}

.tr-transform__scale-point--br {
  left: calc(100% - 7px);
  top: calc(100% - 7px);
}
</style>