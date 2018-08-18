const ApiRootUrl = 'http://127.0.0.1:8360/WaterExquisite_manage/admin/'
let GoodsList = ApiRootUrl + 'goods/index' //获得商品列表
let GoodAdd = ApiRootUrl + 'goods/add'  //添加商品
let GoodDelete = ApiRootUrl + 'goods/delete' //删除商品

const FileServerUrl = 'http://127.0.0.1:8089/';
const FileServerToken = '';
let addImage = FileServerUrl + 'add';
let changeImage = FileServerUrl + 'change';
let getImage = FileServerUrl + 'get';

export {
  ApiRootUrl,
  GoodsList,
  GoodAdd,
  GoodDelete,
  FileServerUrl,
  FileServerToken,
  addImage,
  changeImage,
  getImage
}
