import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    frutas:[
      {nombre: 'manzadana', cantidad:0},
      {nombre: 'pera', cantidad:0},
      {nombre: 'platano', cantidad:0}
    ]

  },
  mutations: {
    aumentar(state, index){
      state.frutas[index].cantidad ++
    }

  },
  actions: {

  }
})
