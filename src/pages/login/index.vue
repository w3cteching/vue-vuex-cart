<template>
    <div>
       <headerCom title="登录">
           <template v-slot:back>
              <button @click="goBack">返回</button>
           </template>
       </headerCom>
        <div class="form">
             <h2>登录</h2>
            <div>
                <label for="">用户名</label>
                <input type="text">
            </div>

            <div>
                <label for="">密码</label>
                <input type="password">
            </div>

            <div>
               <button>登录</button>
            </div>
        </div>
        <footerCom></footerCom>
    </div>
</template>

<script>
import footerCom from '../../components/footercom'
import headerCom from '../../components/headercom'
export default {
    name:'userlogin',
    components: {
        footerCom,
        headerCom
    },
    created() {
        console.log('this.$route.params:',this.$route.params.userId)
       //console.log('this.$route.query:',this.$route.query.userId)

    },
    methods:{
        goBack() {
            this.$router.go(-1);
        }
    }
}
</script>

<style lang="">
    
</style>