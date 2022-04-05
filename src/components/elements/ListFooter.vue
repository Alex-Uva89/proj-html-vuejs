<template>
  <div>
      <ul class="list-footer">
          <li v-for="lists in ListFooter" :key="lists[index]">
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
        ListFooter: String,
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/style.scss";

.list-footer{
    list-style: none;
    color: $white;
    gap: 2rem;
    span{
        text-transform: uppercase;
    }
    li:first-child{
        text-transform: uppercase;
        margin-bottom: 1rem;
    }
}
</style>