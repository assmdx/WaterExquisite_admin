import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store'

//引入muicss和js
import './assets/css/mui.min.css'
import './assets/js/mui.js'

Vue.use(VueRouter)
const router = new VueRouter({
	routes
})

new Vue({
  // el: '#app',
  router,
  store,
}).$mount('#app')
