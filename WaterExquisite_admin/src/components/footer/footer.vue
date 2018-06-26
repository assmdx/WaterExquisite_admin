<template lang="html">
  <nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item " v-bind:class="{mui-active:isGoodManage}" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">商品管理</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">消息</span>
			</a>
			<a class="mui-tab-item" v-bind:class="{mui-active:isOrderManaga}" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">订单管理</span>
			</a>

		</nav>
</template>

<script>
export default {
  data() {},
  props: ['title'],
  computed: {
    isGoodManage() {
      if (this.title === 'good' || this.title === 'addGood') {
        return true
      }
    },
    isOrder() {
      if (this.title === 'order') {
        return true
      }
    }
  }
}
</script>

<style lang="css">
</style>
