<template>
    <div>
        <div class="main">
            首页主体内容... --   {{ getTotalPrice }}
           <button>-</button> {{ num }}<button @click="add">+</button> --{{ name }}
            <ul>
                <li v-for="(item) in list" :key="item.id">
                    {{ item.name }}
                </li>

            </ul>

          

        </div>

    </div>
</template>

<script>
import {mapState,mapActions,mapGetters} from 'vuex'
import footerCom from '../../components/footercom'
import headerCom from '../../components/headercom'

export default {
    name:'home',
    data() {
        return {
            title:'',
            list:[]
        }
    },
    created() {

        this.getData();
    },
    methods:{
        ...mapActions(['add']),
        getData() {

            console.log('this.$http:',this.$http)

           // this.$http.get('接口地址').then(res=>{})

           this.$http.get('https://cnodejs.org/api/v1/topic/5d5bed6ed53e9171e98a975b',{params:{id:1234}})
                .then(res=>{
                    console.log('res::::',res)
                   // if(res.status==200 && res.data.status==2) {

                      //  this.list=res.data.content;
                   // }
                }).catch(error=>{
                    console.log('error:::',error)
                })
            

         
        },
        changeColor(e) {
           // document.getElementById('box').style.color="#f00";
           //console.log('eeee:',e);
          // e.target.style.color="#0f0";

          //获取ref名
          console.log('ref:',this.$refs)
          this.$refs.box3.style.color="#00f"
        }

    },
    computed: {
        /*
        num() {
            return this.$store.state.num;
        }*/
        ...mapState(['num','name']),
        ...mapGetters(['getTotalPrice']),
        /*
        isLogin() {
            return this.$store.state.login.isLogin
        }
        */
    },
    components: {
        footerCom,
        headerCom,
    }
}
</script>

<style lang="">
    
</style>