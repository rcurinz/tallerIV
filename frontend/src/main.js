import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'



import "@progress/kendo-ui";
import "@progress/kendo-theme-default";
import { DiagramInstaller } from "@progress/kendo-diagram-vue-wrapper";
import { DataSourceInstaller } from "@progress/kendo-datasource-vue-wrapper";

Vue.use(DiagramInstaller);
Vue.use(DataSourceInstaller);
Vue.config.productionTip = false;

import VueMermaid from 'vue-mermaid'
Vue.use(VueMermaid)
Vue.use(BootstrapVue)

import SimpleFlowchart from 'vue-simple-flowchart';
import 'vue-simple-flowchart/dist/vue-flowchart.css';


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)

// Agregamos la URL base de nuestra API
axios.defaults.baseURL = 'http://localhost:3000/api';


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
