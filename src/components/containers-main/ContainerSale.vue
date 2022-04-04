<template>
  <div class="container-sale">
      <wave-svg />
  </div>
</template>

<script>
import WaveSvg from '../elements/WaveSvg.vue'


export default {
  components: { WaveSvg },
    name: 'ContainerSale'
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/style.scss";

.container-sale{
    width: 100vw;
    height: 600px;
    background-image: url('../../img/first-order-background-scaled.jpg');
    background-size: cover;
    background-position-y: 100px;

}

</style>