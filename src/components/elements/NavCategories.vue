<template>
  <div>
      <ul class="list-categories">
          <li v-for="item in store.categoriesMenu" :key="item.id" class="style-icon">
              <font-awesome-icon :icon="item.icon" :class="item.color" class="icon" />
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
    .style-icon{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}

.icon{
    padding-bottom: 1rem;
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