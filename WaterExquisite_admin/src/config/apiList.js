const ApiRootUrl = 'http://127.0.0.1:8360/WaterExquisite_api/'
let GoodsList  =  ApiRootUrl + 'goods/list' //获得商品列表
let GoodsDetail =  ApiRootUrl + 'goods/detail'  //获得商品的详情
let GoodAdd =  ApiRootUrl + 'goods/add'  //添加商品
let OrderList = ApiRootUrl + 'order/list' //订单列表

export {
	ApiRootUrl,
	GoodsList,
	GoodsDetail,
  GoodAdd,
	OrderList
}