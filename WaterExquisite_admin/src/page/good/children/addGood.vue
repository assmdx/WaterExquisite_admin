<template lang="html">
  <div class="">
    <Header></Header>
    <div class="mui-content" >
		    <div class="mui-content-padded" style="margin:0px;">
		    	<form class="mui-input-group">
					<div class="mui-input-row">
						<label>商品名称</label>
						<input type="text" id= "goodName" v-model="good.info.name" placeholder="请输入商品名称">
					</div>
					<div class="mui-input-row">
						<label>商品价格</label>
						<input type="text" id= "goodPrice" v-model="good.info.goods_retail_price" class="mui-input-clear" placeholder="商品价格" data-input-clear="5"><span class="mui-icon mui-icon-clear mui-hidden"></span>
					</div>
					<div class="mui-input-row">
						<label>商品数量</label>
						<input type="text" id= "goodNum" v-model="good.number" class="mui-input-clear" placeholder="商品数量" data-input-clear="5"><span class="mui-icon mui-icon-clear mui-hidden"></span>
					</div>
					<div class="mui-input-row" style="margin: 10px 5px;">
						<textarea id="textarea" v-model="good.info.goods_desc" rows="2" placeholder="商品描述"></textarea>
					</div>

          <input @change="fileChange($event)" id = "upload_file" style="position: absolute; left: 0;top:200; opacity: 0;" accept="image/*" type="file" name="licence_image" multiple>
          <div class="mui-content-padded">
						<a><span class="mui-icon mui-icon-camera" style="color:#777">
						</span></a>
					</div>

          <div class="mui-content">
            <div class="mui-content-padded">
              <p v-for="(item,index) in good.gallery" >
                <img :src="item" alt="" style="">
              </p>
            </div>
          </div>

          <div class="mui-button-row">
            <button type="button" class="mui-btn mui-btn-success" >预览</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" @click = "publishGood" class="mui-btn mui-btn-primary" >发布</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" class="mui-btn mui-btn-danger"  >取消</button>
          </div>
				</form>

		    </div>
		</div>


    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../../../components/header/header'
import Footer from '../../../components/footer/footer'
import ImageCompressor from 'image-compressor.js'
import axios from 'axios'
import {
  GoodsList,
  OrderList,
  GoodAdd
} from '../../../config/apiList'

import {
  mapState,
  mapActions
} from 'vuex'

export default {
  name: 'addGood',
  data() {
    return {
      good:{
        info: {
          goods_desc: '商品描述',
          name: '商品名称',
          goods_retail_price: 0,
        },
        gallery: [],
        attribute: [],
        specificationList: [],
        number: 0
      }
    }
  },
  components: {
    Header,
    Footer,
  },
  created(){

  },
  methods: {
    clickUploadImage(){
      console.log('clickUploadImage is touched');
      document.getElementById('upload_file').click();
    },
    publishGood(){
      let that = this
      axios.post(GoodAdd,that.good).then(dataRes => {
        alert('发布成功')
      }).catch(e=>{
        alert('发布失败，请检查网络连接')
      })
    },
    fileChange(el){
      let that = this
      const imageCompressor = new ImageCompressor()
      for(let i = 0; i < el.target.files.length;i++){
        // that.gallery.push(el.target.files[i])
        imageCompressor.compress(el.target.files[i],{
          quality:0.2,
          maxWidth:1080,
          maxHeight:1920,
          convertSize:1000000
        }).then((result) => {
          let reader = new FileReader();
          reader.readAsDataURL(result);
          reader.onloadend = function(){
            that.good.gallery.push(reader.result);
          }
        }).catch((e)=>{
            console.log('compress image error:',e);
        })
      }
    }
  }
}
</script>

<style lang="css">
  .mui-content-padded {
		padding: 0px;
	}
	.mui-content-padded a {
		margin: 0px;
		/* width: 50px;
		height: 50px; */
		display: inline-blockl;
		text-align: center;
		background-color: #fff;
		border: 1px solid #ddd;
		border-radius: 6px;
		background-clip: padding-box;
    font-size: 43px;
    margin-left: 25px;
	}
	.mui-content-padded a .mui-icon {
		margin-top: 12px;
	}
  p img {
    max-width: 100%;
    height:auto;
  }
  .mui-icon{
    font-size: 40px;
  }
  img {
    border:0;
  }
  .element::-webkit-scrollbar { width: 0 !important }
  .mui-input-group::-webkit-scrollbar {
    display: none;
  }
</style>
