<template>
    <div>
        要展现的分类内容组件--11111
        {{ $route.params.typeid }}
        {{ $route.query.typeid }}
    </div>
</template>

<script>
export default {
    name:'fenleicontent',
    created() {
       
    },
    watch:{
        '$route'(to,from){
             console.log('to:::::',to.params.typeid);
             console.log('from:::::',from.params.typeid);
        }
    }
}
</script>

<style lang="">
    
</style>