<template>
    <div>
       
        <div class="main">购物车主体内容...---{{ msg }}

            <input type="text">
        </div>
      
    </div>
</template>

<script>
import footerCom from '../../components/footercom'
import headerCom from '../../components/headercom'
export default {
    name:'cart',
    data() {
        return {
            msg:123
        }
    },
    beforeRouteEnter(to,from,next) {

        console.log('11111111');
     
        next(vm=>{
            vm.msg=from.meta.title
        })

    },
    activated() {
        console.log('进入缓存');
    },
    deactivated() {
        console.log('离开缓存');
    },
    components: {
    }
}
</script>

<style lang="">
    
</style>