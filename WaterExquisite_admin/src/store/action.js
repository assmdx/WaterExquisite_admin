import ajax from '../config/ajax'

import {
  GoodsList,
  OrderList,
  GoodAdd
} from '../config/apiList'
export default {
  async initializeData({commit,state}) {
    if (state.title === 'good') {
      return ajax('POST',GoodsList)
    } else if (state.title === 'order') {
      let orderList = await ajax('POST',OrderList)
      return orderList
    }
  }
}
