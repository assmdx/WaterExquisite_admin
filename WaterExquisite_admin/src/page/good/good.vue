<template lang="html">
  <div class="">
    <Header @gotoAddGood="gotoAddGood"></Header>
    <div v-if="$store.state.title === 'good'" class="mui-content">
      <br>
      <Search></Search>

      <ul v-for="(item,index) in goodList" :key="item._id" id="OA_task_1" class="mui-table-view">
  				<li class="mui-table-view-cell mui-media mui-transitioning">
  					<div class="mui-slider-right mui-disabled">
  						<a class="mui-btn mui-btn-red" style="transform: translate(0px, 0px);">删除</a>
  					</div>
  					<div v-for="(itemImg,indexImg) in item.gallery" class="mui-slider-handle">
  						<a v-if="indexImg === 0" href="javascript:;">
                <img  class="mui-media-object mui-pull-left"  :src = "getFirstImg(indexImg)">
  							<div class="mui-media-body">
  								<p class="mui-ellipsis">{{item.info.name}}</p>
  							</div>
  						</a>
  					</div>
  				</li>
  			</ul>

    </div>
    <Footer></Footer>
  </div>
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
      goodList: [Object]
    }
  },
  async created() {
    if (this.$store.state.title === 'good') {
      // this.goodList = await this.initializeData()
      this.initializeData().then(data => {
        this.goodList = data.data.goodList
      }).catch(e =>{
        //网络出问题
        console.log(e);
        console.log('network is bad?');
      })
    }
  },
  methods: {
    ...mapActions(['initializeData']),
    getFirstImg(index){
      return this.goodList[index].gallery[0]
    },
    gotoAddGood(){
      this.$store.commit('GOTO_ADDGOOD')
      this.$router.push({path:'addGood'})
    }
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
