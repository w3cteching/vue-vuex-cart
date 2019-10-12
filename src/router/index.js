import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//引入要跳转的组件
import Home from '../pages/home'
//import Cate from '../pages/cate'
const Cate = () => import('../pages/cate');
import FenLeiContent from '../pages/cate/catecontent'

//import Cart from '../pages/cart'
const Cart = () => import('../pages/cart');

//import My from '../pages/my'
const My = () => import('../pages/my');

import HeadIcon from '../pages/headicon'
import userInfo from '../pages/userinfo'

import Login from '../pages/login'

//引入404页面
import Error404 from '../components/errorpage/404'



//配置路由
const routes = [
    { path:'/',redirect: '/home' },
    {
        path: '/home',
        component: Home,
        meta: {
            title: '首页1111',
            gongneng:'加载完成后第一个页面'
            
        }
    },
    {
        path: '/cate',
        component: Cate,
        meta: {
            title:'分类'  
        },
        children: [
            { path:'',redirect: 'type/rexiao'},  //默认二级跳转
            {
                path: 'type/:typeid',
                component: FenLeiContent,
                meta: {
                    title:'分类内容'
                }
            },
           // { path: 'type', component: FenLeiContent },
            
        ]
    },
    {
        path: '/Cart',
        component: Cart,
        alias: '/gouwuche',
        beforeEnter: (to, from, next) => {
            console.log('购物车路由独享的钩子：', to)
            
            next();
        },
        meta: {
            title: '购物车',
            msg:'购物车信息'
            
        }

    },
    {
        path: '/my',
        components: {
            default: My,
            a11: HeadIcon,
            a22:userInfo,
            
        },
        meta: {
            title: '我的',
            requiredAhur:true
        }
    },
    {
        path: '/login',
        name:'userlogin',
        component: Login,
        meta: {
            title:'登录'
        }
    },
    //{ path: '*', component: Error404 },
   // { path: '*', redirect: '/home' },
   
    
]



//实例化路由
const router = new VueRouter({
    mode:'hash',
    routes,
    linkActiveClass:'active'
})

export default router;




