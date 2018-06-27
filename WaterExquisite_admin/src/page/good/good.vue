<template lang="html">
  <Header></Header>
  <div class="mui-content" >
    <Search></Search>
    <ul v-for="{item,index} in goodList" v-bind="{_id:item._id}" id="OA_task_1" class="mui-table-view">

				<li class="mui-table-view-cell mui-media mui-transitioning">
					<div class="mui-slider-right mui-disabled">
						<a class="mui-btn mui-btn-red" style="transform: translate(0px, 0px);">删除</a>
					</div>
					<div class="mui-slider-handle">
						<a href="javascript:;">
							<img class="mui-media-object mui-pull-left" src="../images/shuijiao.jpg">
							<div class="mui-media-body">
								幸福
								<p class="mui-ellipsis">{item.info[0].goods_desc}</p>
							</div>
						</a>
					</div>
				</li>
			</ul>

  </div>
  <Footer></Footer>
</template>

<script>
import Header from '../../components/header/header'
import Search from '../../components/search/search'
import Footer from '../../components/footer/footer'
import {
  mapState,
  mapActions
} from 'vuex'

export default {
  name: 'good',
  data() {
    return {
      goodList: []
    }
  },
  async created() {
    if (this.title === 'good') {
      this.goodList = await this.initializeData()
    }
  },
  methods: {
    ...mapActions(['initializeData'])
  },
  components: {
    Header,
    Search,
    Footer,
  },
  computed: {

  }
}
</script>

<style lang="css">
</style>
