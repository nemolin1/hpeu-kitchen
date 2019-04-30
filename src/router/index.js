import Vue from 'vue'
import Router from 'vue-router'
// 导入每个大模块的跟组件
import Home from '../routers/Home/Home'
import Mine from '../routers/Mine/Mine'
import Collection from '../routers/Collection/Collection'
import Market from '../routers/Market/Market'
// import HelloWorld from '@/components/HelloWorld'
// 注:上面路径的@表示前面的../之类的,是被定义之后的.
Vue.use(Router)

export default new Router({
// routes:[
// {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
// ]
// 根目录  只写‘/’表示根目录,即主页
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/collection',
      name: 'Collection',
      component: Collection
    },
    {
      path: '/market',
      name: 'Market',
      component: Market
    }
  ]
})
