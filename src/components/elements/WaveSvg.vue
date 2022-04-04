<template>
  <div class="container-svg">
      <img src="../../img/svg-0.svg" class="wave-img" alt="wave effect">
      <img src="../../img/svg-0.svg" class="wave1" alt="wave effect">
      <img src="../../img/svg-0.svg" class="wave2" alt="wave effect">
      <img src="../../img/svg-0.svg" class="wave3" alt="wave effect">
  </div>
</template>

<script>
export default {
    name: 'WaveSvg'
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/style.scss";
.container-svg{
    position: relative;
}
img{
    position: absolute;
    top: -50%;
    left: 0;
}

.wave-img{
    position: absolute;
    top: 0;
    left: -15%;
}

.wave1{
    opacity: .2;
    position: absolute;
    top: 35px;
    left: -10%;
    transform: rotateX(30deg);
}

.wave2{
    opacity: .2;
    position: absolute;
    top: 60px;
    left: -11%;
    
}

.wave3{
    opacity: .2;
    position: absolute;
    top: 85px;
    left: -9%;
}

</style>