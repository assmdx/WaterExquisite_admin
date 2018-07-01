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
						<textarea id="textarea" rows="20" placeholder="商品描述"></textarea>
					</div>


          <div class="mui-content-padded">
						<input id = "uploadImg" style="position: absolute;left: 0;top: 200;opacity: 0;" accept="image/*" type="file" name="licence_image" multiple>
						<a><span class="mui-icon mui-icon-camera"  style="color:#777">
						</span></a>
					</div>
					<ul class="mui-table-view mui-grid-view mui-grid-9" id="image_list"></ul>
					<div style="display: none;margin: 5px auto;width: 90%;" >
						<h5 style="background-color:#efeff4">上传的图片为：</h5>
						<ul class="mui-table-view mui-grid-view" >
              <li v-for"(item,index) in gallery"class="mui-table-view-cell mui-media mui-col-xs-6">
		            <a href="#">
		                <img class="mui-media-object" src="{{item}}">
                </a>
              </li>
            </ul>
					</div>


					<div class="mui-button-row">
						<button type="button" class="mui-btn mui-btn-success" >预览</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<button type="button" class="mui-btn mui-btn-primary" >发布</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<button type="button" class="mui-btn mui-btn-danger"  >取消</button>
					</div>
				</form>
		    </div>
		</div>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import '../../assets/js/html5ImgCompress.min.js'
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
  methods: {
    publishGood(){
      this.addGood.then(data => {

      }).catch(e=>{
        alert('发布失败，请检查网络连接')
      })
    }
  },
  created: {
    document.getElementById('uploadImg').addEventListener("change", function(e) {
      new html5ImgCompress(e.target.files[0], {
        before: function(file) {
          console.log('压缩前...');
          // 这里一般是对file进行filter，例如用file.type.indexOf('image') > -1来检验是否是图片
          // 如果为非图片，则return false放弃压缩（不执行后续done、fail、complete），并相应提示
        },
        done: function(file, base64) {
          console.log('压缩成功...');
          // ajax和服务器通信上传base64图片等操作
          this.gallery.push(file)
        },
        fail: function(file) {
          console.log('压缩失败...');
        },
        complete: function(file) {
          console.log('压缩完成...');
        },
        notSupport: function(file) {
          console.log('浏览器不支持！')
          // 不支持操作，例如PC在这里可以采用swfupload上传
        }
      });
    }, false)
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
		display: inline-block;
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
