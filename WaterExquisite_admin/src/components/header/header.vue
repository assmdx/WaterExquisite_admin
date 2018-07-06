<template lang="html">
    <header class="mui-bar mui-bar-nav">
			<a class="mui-icon mui-icon-bars mui-pull-left mui-plus-visible"></a>
			<h1 class="mui-title">{{getTitle}}</h1>
      <!-- <a v-if="isGoodManage"><span class="mui-icon mui-icon-plusempty" style="position:absolute;right:20px"></span></a> -->
      <router-link v-if="isGoodManage" to="/addGood" append><span class="mui-icon mui-icon-plusempty" style="position:absolute;right:20px"></span></router-link>
      <a v-if="isOrderManaga"><span class="mui-icon mui-icon mui-icon-bars" style="position:absolute;right:20px"></span></a>
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
    isOrderManaga() {
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
  }
}
</script>

<style lang="css">
</style>
