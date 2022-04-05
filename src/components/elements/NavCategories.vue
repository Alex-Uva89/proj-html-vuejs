<template>
  <div>
      <ul class="list-categories">
          <li v-for="item in store.categoriesMenu" :key="item.id">
              <img :class="item.color" :src="item.img" :alt="item.text + 'icon'">
              <div>{{item.text}}</div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name: 'NavCategories'
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/style.scss";

.list-categories{
    list-style: none;
    display: flex;
    justify-content: space-around;
    gap: 1rem;
    padding: 4rem 0;
}

.green{
    color: $green-icon;
}
.yellow{
    color: $yellow-icon;
}
.blue{
    color: $blue-icon;
}
.brown{
    color: $brown-icon;
}


</style>