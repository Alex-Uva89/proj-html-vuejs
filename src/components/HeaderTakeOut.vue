<template>
  <header>
    <!-- NAV -->
    <div class="header-top">
        <!-- LOGO -->
        <img src="../img/takeout-logo-mobile.png" alt="">
        <!-- NAVIGATORE -->
        <ul class="nav">
            <li>
                <a href="#">Home</a> 
            </li>
            <li>
                <a href="#">Order Online</a> 
            </li>
            <li>
                <a href="#">About</a> 
            </li>
            <li>
                <a href="#">News</a> 
            </li>
            <li>
                <a href="#">Contact Us</a> 
            </li>
            <li>
                <a href="">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
                </a>
            </li>
        </ul>
    </div>

    <!-- JUMBO -->

    <div class="header-bottom">

    </div>
  </header>
</template>

<script>

export default {
    name: 'HeaderTakeOut',
}
</script>

<style lang="scss" scoped>
@import "../assets/style/style.scss";

header{
    width: 100vw;
    height: 600px;
    padding-top: 50px;
    background-image: url('../img/home-background-hero-scaled.jpg');
    background-size: cover;
    background-position: center;
}

.header-top{
    width: 830px;
    height: 90px;
    margin: auto;
    margin-top: 25px;
    display: flex;
    justify-content: space-between;
    img{
        height: 50%;
    }
}

.nav{
    list-style: none;
    li{
        display: inline-block;
        margin: .5rem;
        a{  
            color: $white;
            text-decoration: none;
            &:hover{
                color: $goldenrod;
            }
        }
    }
}

</style>