<template>
    <nav class="Acc-nav">
        <div class="container-nav">
          <router-link to="/" class="logo">
            <img src="@/assets/images/logo1.png" alt="">
            
           
          </router-link>
          <ul class="Acc-menu">
            <li><router-link to="/" class="Acc-lien">Accueil</router-link></li>
            <li><router-link to="#" class="Acc-lien">Magasin</router-link></li>
            <li><router-link to="#" class="Acc-lien">Prix</router-link></li>
            <li><router-link to="#" class="Acc-lien">Stock</router-link></li>
            <li><router-link to="{name:'accueil' , hash : '#test'}" class="Acc-lien">Contact</router-link></li>
          </ul>
          <div class="burger">
            <div class="line1"></div>
            <div class="line1"></div>
            <div class="line1"></div>
          </div>
        </div>
    </nav>  
</template>

<script>
export default {
    name:'CptNavBar',
    data(){
        return{

        }
    },methods: {
        
    },
    mounted() {
        const burger = document.querySelector('.burger')
        const Navmenu = document.querySelector('.Acc-menu')
        burger.addEventListener('click',() =>{
          burger.classList.toggle("burger-active")
          Navmenu.classList.toggle("Acc-menu-active")
        })
    },
    setup(){
   
    }

}
</script>
<style scoped>
.logo img{
  height: 5rem;
    width: 20rem;
    border: none;
    object-position: bottom; height: 5rem;
    width: 36rem;
    border: none;
}
</style>

<style>

.Acc-nav {
    /* left: 0;
    position: fixed;
    right: 0;
    top: 0;
    transition: all 0.3s ease-in-out; */
    background-color:var(--blanc);
   border-bottom: 1px solid red;
}
.Acc-nav_active{
    transition: 0.5s ease-in;
}


.Acc-menu >.Acc-cadenas {
  display: none;
}

.Acc-menu.Acc-menu-active >.Acc-cadenas{
  display: block;
}

.Acc-nav .Acc-menu.Acc-menu-active ~ .Acc-cadenas{
  display: none;
}

.container-nav{
    margin: 0 auto;
    max-width: var(--max-width);
}

.logo{
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    padding: 0 !important;
    /* border: 1px solid red; */
}
.logo p{
  color: var(--vert);
  font-size: 10px;


}
.logo p:hover{

  color: var(--red);
}
/* .logo img{
    height: 5rem;
    width: 19rem;
    border: none;
} */

.Acc-nav .container-nav{
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 10px 0 0 10px;
    transition: all 0.5s ease-in-out;
}
.Acc-nav .container-nav ul {
    align-items: center;
    display: flex;
    justify-content: center;
    list-style-type: none;
    z-index: 5;
}

.Acc-nav a {
    color: var(--noir); 
    padding: 7px 15px;
    text-decoration: none;
    transition: all 0.5s ease-in-out;
}
/* .Acc-nav_active a{
    color:var(--bg2);

} */
.Acc-nav a::before{
    content: '';
    position:absolute;
    width: 100%;
    height: 2px;
    background: var(--noir);
    transform: scaleX(0);
    transition: transform 0.5s ease-in-out;
    transform-origin: right;

}
/* .Acc-nav.active {
    background-color: var(--blanc);;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
} */

/* .Acc-nav.active a {
    color: var(--noir);
} */

.Acc-nav.active .container-nav {
padding: 10px 0;
}

.Acc-lien:hover{
    color: var(--vert);
    
}
.burger{
    margin-top: 5px;
    cursor: pointer;
    display: none;
}
.burger div{
    width: 25px;
    height: 5px;
    margin: 5px;
    background-color: var(--noir);

}
.Acc-nav_active .burger div{
    background-color: var(--noir);
}
@media (max-width: 880px) {
  .logo p{
  display: none;
}
  .Acc-nav .container-nav{
    padding:20px 0 0;
  }
    .burger{
        margin-top: -3px;
        display: block;
        margin-right: 42px;
    } 
    .burger.burger-active .line1:nth-child(2){
        opacity: 0;
    }
    .burger.burger-active .line1:nth-child(1){
        transform: translateY(10px) rotate(45deg);
    }
    .burger.burger-active .line1:nth-child(3){
        transform: translateY(-9px) rotate(-45deg);
    }
    .Acc-nav .container-nav >.Acc-cadenas{
      display: none;
    }

    .Acc-nav .container-nav ul li {
     margin: 10px 0;
    }

    .Acc-menu{
        position: absolute;
        left: 0px;
        top:-165% ;
        gap: 6;
        display: flex;
        flex-direction: column;
        background-color: rgba(255, 255, 255, 1);
        width: 100%;
        text-align: center;
        transition:  0.3s;
        margin-top: 88px;
        /* height: 300px; */
        /* overflow: scroll; */
    }

    .Acc-nav a{
      color: var(--noir);
    }
    li{
        margin: 16px 0;
    }
    .Acc-menu.Acc-menu.Acc-menu-active{
        top: 0px; 
    }
  
}


</style>