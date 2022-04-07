<template>
  <div>
      <ul class="list-footer">
          <li v-for="lists in ListFooter" :key="lists">
              {{lists}}
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name:'ListFooter',
    props:{
        TitleList: Array,
        ListFooter: Array,
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/style.scss";

.list-footer{
    list-style: none;
    color: $white;
    gap: 2rem;
    li{
        margin-bottom: .5rem;
    }
    span{
        text-transform: uppercase;
    }
    li:first-child{
        text-transform: uppercase;
        margin-bottom: 2rem;
    }
}
</style>