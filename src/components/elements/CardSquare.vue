<template>
  <div class="container.cards">
      <a :href="cardSquare.link" v-for="cardSquare in store.cardMenu" :key="cardSquare.id" class="card-square">
          <img :src="cardSquare.img" :alt="cardSquare.title">
          <div class="text-card-menu">{{cardSquare.title}}</div>
      </a>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "../../assets/style/style.scss";

.container.cards{
    display: flex;
}

.card-square{
    display: inline-block;
    width: calc((100% - 50px) /4);
    margin: 5px;
    position: relative;
    .text-card-menu{
        color: $white;
        text-transform: uppercase;
        font-weight: 500;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    img{
        width: 100%;
        filter: brightness(50%);
    }
}


</style>