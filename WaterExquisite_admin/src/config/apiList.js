const ApiRootUrl = '../WaterExquisite_api/'
let GoodsList = ApiRootUrl + 'index/index' //获得商品列表
let GoodsDetail = ApiRootUrl + 'goods/detail'  //获得商品的详情
let GoodAdd = ApiRootUrl + 'goods/add'  //添加商品
let OrderList = ApiRootUrl + 'order/list' //订单列表


const FileServerUrl = 'http://127.0.0.1:8080/';
const FileServerToken = '';
let addImage = FileServerUrl + 'add';
let changeImage = FileServerUrl + 'change';
let getImage = FileServerUrl + 'get';

export {
  ApiRootUrl,
  GoodsList,
  GoodsDetail,
  GoodAdd,
  OrderList,
  FileServerUrl,
  FileServerToken,
  addImage,
  changeImage,
  getImage
}
