<template>
  <div class="container-last-news">
    <header-section 
    :Title="store.titleSection2"
    :TextButton="store.textButtonSection2"
     />
    <div class="container-cards-laste-news">
        <card-description />
    </div>
  </div>
</template>

<script>
import CardDescription from '../elements/CardDescription.vue'
import HeaderSection from '../elements/HeaderSection.vue'

export default {
  components: { HeaderSection, CardDescription },
    name: 'ContainerLastNews'
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/style.scss";

.container-last-news{
  width: 775px;
  margin: 0px auto;
  padding-top: 2rem;
  padding-bottom: 8rem;
  background-color: $white;
}

.container-cards-last-news{
    display: flex;
}
</style>