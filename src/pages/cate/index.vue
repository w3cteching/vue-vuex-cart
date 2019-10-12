<template>
    <div>
        
        <div class="main">
           <div class="fenlei">
               <ul>
                  <router-link 
                    tag="li"
                    v-for="(item) in cateType"
                    :key="item.id"
                    :to="`/cate/type/${item.typeid}`"
                    >
                    {{ item.name }}
                </router-link>

                <router-link to="/cate/type?typeid=test">测试</router-link>
               </ul>
           </div>

           <div class="content">
               <router-view></router-view>
           </div>
            
        </div>
     
    </div>
</template>

<script>
import footerCom from '../../components/footercom'
import headerCom from '../../components/headercom'
export default {
    name:'cate',
    data() {
        return {
            cateType:[
                {id:1,name:'热销',typeid:'rexiao'},
                {id:2,name:'服装',typeid:'fuzhuang'},
                {id:3,name:'电子',typeid:'dianzi'},
                {id:4,name:'母婴',typeid:'muying'},
            ]

        }
    },
    components: {
        footerCom,
        headerCom,
    }
}
</script>

<style>
.main {
    display: flex;
}

.fenlei li {
    padding:10px;
}

.main>div {
    padding:6px;
}

</style>