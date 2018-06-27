import Vue from 'vue'
import vuex from 'vuex'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex)
const state ={
  title:'good'//or addGood order
}
export default new Vuex.Store({
  state,
  actions,
  mutations
})