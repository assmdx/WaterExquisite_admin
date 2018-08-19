<template lang="html">
  <nav class="mui-bar mui-bar-tab">
			<a :class="[ 'mui-tab-item',isGoodManage ? 'mui-active' : '' ]" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">商品管理</span>
			</a>
			<a class="mui-tab-item">
				<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">消息</span>
			</a>
			<a :class="[ 'mui-tab-item',isOrderManage ? 'mui-active' : '' ]">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">订单管理</span>
			</a>

		</nav>
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
      if (this.title === 'good' || this.title === 'addGood') {
        return true
      }
    },
    isOrderManage() {
      if (this.title === 'order') {
        return true
      }
    }
  }
}
</script>

<style lang="css">
</style>
