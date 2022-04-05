<template>
  <footer>
    <ul class="container-lists">
      <li v-for="(list,index) in store.listsFooter" :key="list">
        <list-footer 
        :ListFooter="store.listsFooter[index]"
         />
      </li>
      <li>
        <ul>
          
        </ul>
      </li>
      <li></li>
    </ul>
  </footer>
</template>

<script>
import ListFooter from './elements/ListFooter.vue'
export default {
  components: { ListFooter },
    name: 'FooterTakeOut'
}
</script>

<style lang="scss" scoped>
@import "../assets/style/style.scss";

footer{
  background-image: url('../img/footer-background-scaled.jpg');
  background-size: cover;
  background-position: center;
  height: 800px; 
  // FIXME:
  .container-lists{
    display: flex;
    gap: 2rem;
  }
}

</style>