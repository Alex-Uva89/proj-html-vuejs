<template>

    <ul class="list-style">
        <li>{{store.listVoucher[0].titleListVoucher}}</li>
        <li class="li-img-item">
            <img class="img-item" :src="store.listVoucher[0].img" :alt="store.listVoucher[0].titleListVoucher">
        </li>
        <li class="not">{{store.listVoucher[0].text[0]}}</li>
        <li class="not">{{store.listVoucher[0].marker}}</li>
        <li class="not">{{store.listVoucher[0].text[1]}}</li>
    </ul>
  
</template>

<script>
export default {
    name: 'ListVoucher'
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/style.scss";

.list-style{
    list-style: none;
    width: calc(100% / 5);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5rem;
    li:first-child{
        text-transform: uppercase;
    }
}

.li-img-item{
    width: 40%;
    .img-item{
        width: 100%;
    }
}

</style>