<template lang="html">
  <div class="">
    <Header></Header>
    <div class="mui-content" >
		    <div class="mui-content-padded">
		    	<form class="mui-input-group">
					<div class="mui-input-row">
						<label>商品名称</label>
						<input type="text" placeholder="请输入商品名称">
					</div>
					<div class="mui-input-row">
						<label>商品价格</label>
						<input type="text" class="mui-input-clear" placeholder="商品价格" data-input-clear="5"><span class="mui-icon mui-icon-clear mui-hidden"></span>
					</div>
					<div class="mui-input-row">
						<label>商品原价</label>
						<input type="text" class="mui-input-clear" placeholder="商品原价" data-input-clear="5"><span class="mui-icon mui-icon-clear mui-hidden"></span>
					</div>
					<div class="mui-input-row">
						<label>商品数量</label>
						<input type="text" class="mui-input-clear" placeholder="商品数量" data-input-clear="5"><span class="mui-icon mui-icon-clear mui-hidden"></span>
					</div>
					<div class="mui-input-row" style="margin: 10px 5px;">
						<textarea id="textarea" rows="2" placeholder="商品描述"></textarea>
					</div>

          <input @change="fileChange($event)" id = "upload_file" style="position: absolute; left: 0;top:200; opacity: 0;" accept="image/*" type="file" name="licence_image" multiple>
          <div class="mui-content-padded">
						<a><span class="mui-icon mui-icon-camera" style="color:#777">
						</span></a>
					</div>


					<ul class="mui-table-view mui-grid-view mui-grid-9" id="image_list"></ul>
					<div style = "margin: 5px auto;width: 90%;">						
						<ul class="mui-table-view mui-grid-view" >
              <li v-for="(item,index) in gallery" class="mui-table-view-cell mui-media mui-col-xs-6">
		            <a href="#">
		                <img class="mui-media-object" :src="item">
                </a>
              </li>
            </ul>
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

import {
  mapState,
  mapActions
} from 'vuex'

export default {
  name: 'addGood',
  data() {
    return {
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
      this.addGood.then(data => {

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
          quality:0.6,
          convertSize:1000000
        }).then((result) => {
          let reader = new FileReader();
          reader.readAsDataURL(result);
          reader.onloadend = function(){
            that.gallery.push(reader.result);
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
		width: 50px;
		height: 50px;
		display: inline-blockl;
		text-align: center;
		background-color: #fff;
		border: 1px solid #ddd;
		border-radius: 5px;
		background-clip: padding-box;
	}
	.mui-content-padded a .mui-icon {
		margin-top: 12px;
	}
</style>
