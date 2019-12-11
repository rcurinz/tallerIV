import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    frutas:[
      {nombre: 'manzadana', cantidad:0},
      {nombre: 'pera', cantidad:0},
      {nombre: 'platano', cantidad:0}
    ],

    Nodos:{nombre:'noodo1', texto:'texto', x:300, y:300}

  },
  mutations: {
    aumentar(state, index){
      state.frutas[index].cantidad ++
    },
  Pnodos(texto){
    console.log(texto);

  }

  },
  actions: {

  }
})
