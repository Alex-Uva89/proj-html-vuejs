<template>
  <div class="container-app">
      <div class="background">
          <div class="box-text">
              <h3>Download our</h3>
              <h2>Ordering app</h2>
              <span>
                  <img src="" alt="">
              </span>
              <span>
                  <img src="" alt="">
              </span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'ContainerApp'
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/style.scss";

.background{
    margin: 2rem 0;
    width: 100vw;
    height: 360px;
    background-image: url('../../img/app-ordering-scaled.jpg');
    background-size: cover;
    position: relative;
    .box-text{
        position: absolute;
        top: 40%;
        left: 20%;
        h3{
            color: $white;
        }
        h2{
            font-size: 3rem;
            color: $goldenrod
        }
    }
}

</style>