<template>
  <div class="container_most_popular">
      <button-view>start your order</button-view>

  </div>
</template>

<script>
import ButtonView from '../elements/ButtonView.vue'

export default {
  components: { ButtonView },
    name: 'ContainerMostPopular'

}
</script>

<style lang="scss" scoped>
@import "../../assets/style/style.scss";

.container_most_popular{
    width: 775px;
    height: 10rem;
    margin: 0 auto;
    background-color: $white;
    
}

</style>