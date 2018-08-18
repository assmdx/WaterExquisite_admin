import Vue from 'vue'
import App from '../App'

export default [{
    path: '/',
    component: App,
    children: [{
        path: '',
        component: r => require.ensure([], () => r(require('../page/good/good')), 'good'),
      },
      {
        path: '/order',
        component: r => require.ensure([], () => r(require('../page/order/order')), 'order')
      },
      {
        path: '/addGood',
        component: r => require.ensure([], () => r(require('../page/good/children/addGood')), 'addGood')
      },
      {
        path:'/message',
        component:r => require.ensure([],()=> r(require('../page/order/order')),'message')
      }
    ]
}]
