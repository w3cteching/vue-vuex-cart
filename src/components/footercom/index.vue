<template>
    <div class="ft">
        <router-link v-for="(item) in navtype" :key="item.id" :to="{ path:item.url }">
            <svg class="icon" aria-hidden="true">
                <use :xlink:href="`#icon-${item.icon}`"></use>
            </svg>
           {{ item.name }}
        </router-link>
       
</div>
</template>
<script>
export default {
    name:'ft',
    data() {
        return {
            navtype:[
                {id:1,name:'首页',url:'/home',icon:'shouye'},
                {id:2,name:'分类',url:'/cate',icon:'fenlei'},
                {id:3,name:'购物车',url:'/cart',icon:'gouwuche'},
                {id:4,name:'我的',url:'/my',icon:'wode'},
            ]
        }
    }
}
</script>

<style>
.ft {
    position: absolute;
    left:0;
    right:0;
    bottom:0;
    height:44px;
    display: flex;
    
}  

.ft>a {
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.active {
    color:#f00;
}

.active svg {
    fill:#f00;
}
</style>