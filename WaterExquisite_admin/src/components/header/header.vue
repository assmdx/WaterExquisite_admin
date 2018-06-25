<template lang="html">
    <header class="mui-bar mui-bar-nav">
			<a class="mui-icon mui-icon-bars mui-pull-left mui-plus-visible"></a>
			<a id="info" class="mui-icon mui-icon-info-filled mui-pull-right" style="color: #999;"></a>
			<h1 class="mui-title">水玲珑{getTitle}</h1>
      <a v-if="isGoodManage"><span class="mui-icon mui-icon-plusempty" style="position:absolute;right:20px"></span></a>
      <a v-if="isOrderManaga"><span class="mui-icon mui-icon mui-icon-bars" style="position:absolute;right:20px"></span></a>
		</header>
</template>

<script>
import {
  mapState,
  mapActions
} from 'vuex'
export default {
  data(){
  },
  props:['title'],
  computed:{
    isGoodManage(){
      if(this.title === 'good'){
        return true
      }
      return false
    },
    isOrderManaga(){
      if(this.title === 'order'){
        return true
      }
      return false
    },
    getTitle(){
      if(this.title === 'good') {
        return ''
      }
      if(this.title === 'order') {
        return '订单管理'
      }
      if(this.title === 'addGood') {
        return '添加商品'
      }
      return ''
    }
  }
}
</script>

<style lang="css">
</style>
