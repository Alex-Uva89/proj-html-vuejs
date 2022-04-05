<template>
  <div class="header-section">
      <h2>{{Title}}</h2>
      <button-view>{{TextButton}}</button-view>
  </div>
</template>

<script>
import ButtonView from './ButtonView.vue'
export default {
  components: { ButtonView },
  props:{
      Title : String,
      TextButton : String
  }

}
</script>

<style lang="scss" scoped>
@import "../../assets/style/style.scss";

.header-section{
    height: 50px;
    display: flex;
    justify-content: space-between;
    margin: 2rem 1rem;
    h2{
        align-self: flex-end;
    }
}

</style>