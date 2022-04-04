<template>
  <div>
      <button>
          <slot>Insert your text</slot>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
          </svg>
      </button>

  </div>
</template>

<script>


export default {
    name: 'ButtonView'
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/style.scss";

button{
    font-size: .6rem;
    font-weight: 600;
    text-transform: uppercase;
    color: $white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding: .3rem 1.2rem;
    background-color: $cardinal;
    border: 1px solid $cardinal;
    border-radius: 1rem;
    cursor: pointer;
    svg{
        width: .75rem;
    }
}

</style>