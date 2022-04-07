<template>
  <footer>
    <div class="container-lists">
      <div v-for="(list,index) in store.listsFooter" :key="list">
        <list-footer 
        :ListFooter="store.listsFooter[index]"
         />
      </div>
      <list-open />
      <list-voucher />
    </div>
    
    <container-form-footer />
  
  </footer>
</template>

<script>
import ContainerFormFooter from './containers-main/ContainerFormFooter.vue'
import ListFooter from './elements/ListFooter.vue'
import ListOpen from './elements/ListOpen.vue'
import ListVoucher from './elements/ListVoucher.vue'

export default {
  components: { ListFooter, ListOpen, ListVoucher, ContainerFormFooter },
    name: 'FooterTakeOut'
}
</script>

<style lang="scss">
@import "../assets/style/style.scss";

footer{
  width: 100%;
  background-image: url('../img/footer-background-scaled.jpg');
  background-size: cover;
  background-position: center;
  height: 800px; 
  .container-lists{
    color: $white;
    font-size: .8rem;
    padding: 5rem 0px;
    display: flex;
    justify-content: center;
    gap: 2rem;
    list-style: none;
  }
}

li:not(.not):hover{
  cursor: pointer;
  color: $goldenrod;
}
li:first-child:hover{
  color: $white
}

</style>