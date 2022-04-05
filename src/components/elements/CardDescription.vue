<template>
  <div class="container-card-flex">
      <div v-for="card in store.cardDescription" :key="card.id" class="card-news">
          <img :src="card.img" :alt="card.title + ' img'">
          <h2>{{card.title}}</h2>
          <p>{{card.content}}</p>
      </div>
  </div>
</template>

<script>
export default {
    name: 'CardDescription'
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/style.scss";
.container-card-flex{
    display: flex;
}

.card-news{
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    width: calc((100% - 2rem) / 2);
    margin: 1rem 0px;
    gap: .2rem;
    h2{
        text-align: start;
    }
    img,
    p{
        text-align: center;
        width: 80%;
    }
    
}

</style>