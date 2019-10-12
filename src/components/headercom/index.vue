<template>
    <div class="hd"> 
        <slot name="back"></slot>
        <h2>{{ title }}</h2>
        <slot name="search"></slot>
        <slot name="login"></slot>
        
    </div>
</template>

<script>
export default {
    props:{
        title:{
            type:String,
            default:'此处为页面标题'

        }
    },
    data() {
        return {

        }
    },
    methods:{}
}
</script>

<style>
.hd {
    display: flex;
    height:.44rem;
    border-bottom:1px solid #ccc;
} 

.hd>h2 {
  
    display: flex;
    flex:1;
    justify-content:center;
    align-items: center;

}

svg.icon.s {
    fill:#00f;
    font-size:30px
}
</style>