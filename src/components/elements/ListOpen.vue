<template>
  <div>
      <ul class="container-list-opening">
          <li class="title-list-time">
              Opening Hour
          </li>
          <li v-for="item in store.listOpenHour" :key="item" class="item-style not">
              <span>{{item.day}}</span>
              <span>-</span>
              <span class="time">{{item.time}}</span>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name: 'ListOpen'
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/style.scss";

.container-list-opening{
        list-style: none;
    .title-list-time{
        text-transform: uppercase;
        padding-bottom: 3rem;
    }
    .item-style{
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        margin-bottom: .5rem;
        .time{
            color: $goldenrod;
        }
    }
}

</style>