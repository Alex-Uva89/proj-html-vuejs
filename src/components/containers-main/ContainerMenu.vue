<template>
  <div class="container-menu">
    <header-section 
    :Title="store.titleSection1"
    :TextButton="store.textButtonSection1"
     />
    <card-square />
    <nav-categories />
  </div>
</template>

<script>
import CardSquare from '../elements/CardSquare.vue'
import HeaderSection from '../elements/HeaderSection.vue'
import NavCategories from '../elements/NavCategories.vue'


export default {
  components: { HeaderSection, CardSquare, NavCategories },
    name: 'ContainerMenu',
    
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/style.scss";

.container-menu{
  width: 775px;
  margin: 0px auto;
  padding-top: 5rem;
  background-color: $white;
}
</style>