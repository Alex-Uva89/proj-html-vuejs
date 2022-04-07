<template>
  <div class="container-form">
      <img :src="store.logo" alt="takeout logo">
      <h2>{{store.formFooter[0].title}}</h2>
      <p>{{store.formFooter[0].small[0]}}</p>
      <form>
          <input placeholder=" your@mail.com " type="text" name="" id="">
          <button>Subscribe</button>
      </form>
      <div class="container-icons">
        <img v-for="icon in store.formFooter[0].icons" :key="icon" :src="icon" class="icon">
      </div>
      <div class="text-yellow">
        <span>{{store.formFooter[0].small[1]}}</span>
        <span>{{store.formFooter[0].small[2]}}</span>
        <span>{{store.formFooter[0].small[3]}}</span>
        <span>{{store.formFooter[0].small[4]}}</span>
      </div>
  </div>
</template>

<script>


export default {
    name: 'ContainerFormFooter'
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/style.scss";

.container-form{
    width: 100%;
    color: $white;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .6rem;
    p,
    span{
        font-size: .012rem;
        font-weight: 100;
    }
    &>img{
        width: 10%;
    }
    h2,
    .text-yellow{
        color:$goldenrod
    }
        span:nth-child(2n){
            color:$white;
    }
      
}
form{
    width: 35%;
    button{
        width: 100%;
        color: $white;
        text-transform: uppercase;
        background-color: $cardinal;
        padding: .2rem;
        border-radius: 1rem;
        margin-top: .2rem;
    }
    input{
        width: 100%;
        color: $white;
        padding: .2rem;
        border-radius: 1rem;
    }
}

.container-icons{
    display: flex;
    justify-content: center;
}

.icon{
    width: 5%;
}

</style>