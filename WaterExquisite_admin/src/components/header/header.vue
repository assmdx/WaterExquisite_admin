<template lang="html">
    <header class="mui-bar mui-bar-nav">
			<a class="mui-icon mui-icon-bars mui-pull-left mui-plus-visible"></a>
			<h1 class="mui-title">{{getTitle}}</h1>
      <!-- <a v-if="isGoodManage"><span class="mui-icon mui-icon-plusempty" style="position:absolute;right:20px"></span></a> -->
      <a v-if="isGoodManage" @click="gotoAddGood"><span class="mui-icon mui-icon-plusempty" style="position:absolute;right:20px"></span></a>
      <a v-if="isOrderManage"><span class="mui-icon mui-icon mui-icon-bars" style="position:absolute;right:20px"></span></a>
		</header>
</template>

<script>
import {
  mapState,
  mapActions
} from 'vuex'

export default {
  computed: {
    title(){
      return this.$store.state.title
    },
    isGoodManage() {
      if (this.title === 'good') {
        return true
      }
      return false
    },
    isOrderManage() {
      if (this.title === 'order') {
        return true
      }
      return false
    },
    getTitle() {
      if (this.title === 'good') {
        return '水玲珑'
      }
      if (this.title === 'order') {
        return '水玲珑订单管理'
      }
      if (this.title === 'addGood') {
        return '水玲珑添加商品'
      }
      return ''
    }
  },
  methods:{
    gotoAddGood:function(){
      this.$emit('gotoAddGood')
      // this.$store.commit('GOTO_ADDGOOD')
      // this.$router.push({path:'/addGood'})
    }
  }
}
</script>

<style lang="css">
</style>
