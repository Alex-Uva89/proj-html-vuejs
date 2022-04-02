<template>
  <div id="app">
    <header-take-out />
    <main-take-out />
    <footer-take-out />
  </div>
</template>

<script>
import HeaderTakeOut from './components/HeaderTakeOut.vue'
import MainTakeOut from './components/MainTakeOut.vue'
import FooterTakeOut from './components/FooterTakeOut.vue'

export default {
  name: 'App',
  components: {
    HeaderTakeOut,
    MainTakeOut,
    FooterTakeOut
  }
}
</script>

<style lang="scss">
@import "./assets/style/style.scss";
#app {
  font-family: 'Barlow', sans-serif

}
</style>
