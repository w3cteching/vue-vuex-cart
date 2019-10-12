<template>
  <div id="app">
    <HeaderCom></HeaderCom>
  
       <router-view></router-view>
    
    <FooterCom></FooterCom>
  </div>
</template>

<script>
import HeaderCom from './components/headercom'
import FooterCom from './components/footercom'
export default {
  name: 'app',
  components: {
    FooterCom,
    HeaderCom,
  },
}
</script>

<style>
.move-enter-active {
    transition: transform .3s;
}

.move-enter {
    transform: translate3d(-100%,0,0)
}
</style>
