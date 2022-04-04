<template>
  <div class="container_most_popular">
      <h2>Our Most Popular Dishes</h2>
      <card-lenght />
      <button-view>start your order</button-view>
  </div>
</template>

<script>
import ButtonView from '../elements/ButtonView.vue'
import CardLenght from '../elements/CardLenght.vue'

export default {
  components: { ButtonView, CardLenght },
    name: 'ContainerMostPopular'

}
</script>

<style lang="scss" scoped>
@import "../../assets/style/style.scss";

.container_most_popular{
    width: 775px;
    margin: 0px auto;
    padding-top: 8rem;
    background-color: $white;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2{
      font-size: 2rem;
      color: black;
    }
}

</style>