<template>
  <div class="container-card">
      <div v-for="card in elCard" :key="card.id" class="card">
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
import fries from '../../img/skin-on-fries-200x286.jpg'
import choco from '../../img/choco-cookie-frappe-200x286.jpg'
import donut from '../../img/donut-burger-200x286.jpg'

export default {
    name:'CardLenght',
    data(){
        return{
            elCard:[
                {
                id: '1',
                img: fries,
                name: 'Skin On Fries',
                price: '$3.00 - &6.00'
                },
                {
                id: '2',
                img: choco,
                name: 'Choco Cookie Frappe',
                price: '$4.99'
                },
                {
                id: '3',
                img: donut,
                name: 'The Donut Burger',
                price: '$6.99'
                }
            ]

        }
    },
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