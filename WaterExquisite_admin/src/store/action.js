import ajax from '../config/ajax'
import {
  GoodsList,
  OrderList
} from '../config/apiList'
export default {
  async initializeData({
    commit,
    state
  }) {
    if (state.title === 'good') {
      let goodList = await ajax('POST',GoodsList)
      return goodList
    } else if (state.title === 'order') {
      let orderList = await ajax('POST',OrderList)
      return orderList
    }
  }
}
