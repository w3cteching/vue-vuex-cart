<template>
    <div>
     
        <div class="main" >
            我的主体内容..{{ num }} <p v-html="msg"></p>
            <button @click="goLogin">登录</button>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import footerCom from '../../components/footercom'
import headerCom from '../../components/headercom'
export default {
    name:'my',
    data() {
        return {
            msg:'<a href="https://www.baidu.com">今天就要放假拉！！！</a>',
        }
    },
    computed: {
        ...mapState(['num']),
    },
    components: {
        footerCom,
        headerCom,
    },
    methods:{
        goLogin() {
          // this.$router.push('/login') 
          // this.$router.push('login') 
          // this.$router.push({ path:'/login' }) 
          // this.$router.push({ path:'/login' }) 
         // this.$router.push({ name: 'userlogin', params: { userId: '123' }})
         this.$router.push({ name: 'userlogin', params: { userId: '123' }})
         //  this.$router.push({ path: '/login', query: { userId: '123' }})
          // this.$router.replace('/login') 
        }
    },

    /*
    beforeRouteEnter(to,from,next) {
        console.log('组件内的钩子：',to);

        if(to.meta.requiredAhur) {
            
           if(localStorage.getItem('user')) {
               next();
           }else {
               next('/login');
           }

        }else {
            next();
        }

        
        next(vm=>{
            console.log('this.msg:',vm.msg)
        });
       

        //next('/home');
    },
    beforeRouteLeave(to,from,next) {
        console.log('beforeRouteLeaveto::::::',to);
       // console.log('beforeRouteLeave::::::',fmro);

        next()
    }  */
}
</script>

<style lang="">
    
</style>