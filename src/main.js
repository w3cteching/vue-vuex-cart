import Vue from 'vue'
import App from './App.vue'

import Axios from 'axios'

console.log('Axios:',Axios)

Vue.prototype.$http = Axios;

//引入store
import store from './store'



//引入路由配置
import router from './router'

//引入rem
import './utils/rem'

import '../public/css/reset.css'

import 'animate.css'

/*
router.beforeEach((to, from, next) => {

  console.log('totototot::::', to);
  to.meta.title && (document.title = to.meta.title);
  
  to.meta.msg = from.meta.title;
  
  next();

})

*/

/*
router.afterEach( (to,from,next) => {

    console.log('进入之后',to)
})

*/

Vue.config.productionTip = false

new Vue({
  store,
  router,//注入到vue实例中
  render: h => h(App),
}).$mount('#app')

