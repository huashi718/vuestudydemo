import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/pages/index'
import DetailPage from '@/pages/detail'
import DetailAnaPage from '@/pages/detail/analysis'
import DetailCountPage from '@/pages/detail/count'
import DetailForePage from '@/pages/detail/forecast'
import DetailPubPage from '@/pages/detail/publish'
import orderListPage from '@/pages/orderList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path: '/orderList',
      component: orderListPage
    },
    {
      path: '/detail',
      redirect:'/detail/analysis',
      component: DetailPage,
      children:[
        {
          path:'analysis',
          component:DetailAnaPage
        },
        {
          path:'count',
          component:DetailCountPage
        },
        {
          path:'forecast',
          component:DetailForePage
        },
        {
          path:'publish',
          component:DetailPubPage
        }
      ]
    }  

  ]
})
