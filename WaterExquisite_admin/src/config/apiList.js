const ApiRootUrl = '../WaterExquisite_manage/admin/'
let GoodsList = ApiRootUrl + 'goods/index' //获得商品列表
let GoodAdd = ApiRootUrl + 'goods/add'  //添加商品
let GoodDelete = ApiRootUrl + 'goods/delete' //删除商品

const FileServerUrl = '../WaterExquisite_FileServer/';
const FileServerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFwcG1sZXgiLCJuYW1lIjoic2l6aGFpIiwiaWF0IjoxNTM0MDgwNjA5fQ.iuhjnNu4PKtck7IIM01MQhe6xRdrUaymnac7MgZwRw0';
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
