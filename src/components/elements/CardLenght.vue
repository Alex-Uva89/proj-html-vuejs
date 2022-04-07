<template>
  <div class="container-card">
      <div v-for="card in store.elCard" :key="card.id" class="card">
          <a href="#" class="cover">
              <font-awesome-icon icon="fa-solid fa-cart-plus" class="icon" />
              <div>view cart</div>
          </a>
          <img :src="card.img" alt="card.name">
          <h4>{{card.name}}</h4>
          <small>{{card.price}}</small>
      </div>
  </div>
</template>

<script>


export default {
    name:'CardLenght',
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/style.scss";

.container-card{
    display: flex;
    gap: 1rem;
    .card{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: .5rem;
        padding: 2rem 0;
        position: relative;
        .cover{
            opacity: 0;
            width: 100%;
            height: 286px;
            color: $white;
            text-transform: uppercase;
            text-decoration: none;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 10px;
            position: absolute;
            top: 8%;
            left:0;
            background-color: rgba($color: #000000, $alpha: .3);
            transition: opacity 1s;
            &:hover{
                opacity: 1;
            }
            .icon{
                font-size: 2rem;
                background-color: $marshland;
                padding: .8rem;
                border-radius: 50%;

            }
        }
        
                    
        

        small{
            font-weight: 600;
            color: $cardinal;
        }
    }
}

</style>