<template>
  <nav class="Acc-nav">
    <div class="container-nav">
      <router-link to="/" class="logo">
        <img src="@/assets/images/logo2.png" alt="" class="desktop">
        <img src="@/assets/images/logo.png" alt="" class="mobile">
      </router-link>
      <ul class="Acc-menu">
        <li><router-link to="/" class="Acc-lien">Accueil</router-link></li>
        <li><router-link to="/#magasin" class="Acc-lien">Magasin</router-link></li>
        <li><router-link to="/#stock" class="Acc-lien">Prix</router-link></li>
        <li><router-link to="/#partenaire" class="Acc-lien">Partenaires</router-link></li>
        <li><router-link to="/#contact" class="Acc-lien">Contact</router-link></li>
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
  name: 'CptNavBar',
  data() {
    return {

    }
  }, methods: {

  },
  mounted() {
    const burger = document.querySelector('.burger')
    const Navmenu = document.querySelector('.Acc-menu')
    burger.addEventListener('click', () => {
      burger.classList.toggle("burger-active")
      Navmenu.classList.toggle("Acc-menu-active")
    })
  },
  setup() {

  }

}
</script>
<style scoped></style>

<style>
.Acc-nav {
  background-color: var(--blanc);
}

.Acc-nav_active {
  transition: 0.5s ease-in;
}

.Acc-menu>.Acc-cadenas {
  display: none;
}

.Acc-menu.Acc-menu-active>.Acc-cadenas {
  display: block;
}

.Acc-nav .Acc-menu.Acc-menu-active~.Acc-cadenas {
  display: none;
}

.container-nav {
  margin: 0 auto;
  max-width: var(--max-width);
}

.logo {

  padding: 0 !important;
}

.logo img {
  height: 4rem;
  border: none;
}

.Acc-nav .container-nav {
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

.Acc-nav a::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background: var(--noir);
  transform: scaleX(0);
  transition: transform 0.5s ease-in-out;
  transform-origin: right;

}

.Acc-nav.active .container-nav {
  padding: 10px 0;
}

.Acc-lien:hover {
  color: var(--vert);

}

.burger {
  margin-top: 5px;
  cursor: pointer;
  display: none;
}

.burger div {
  width: 25px;
  height: 5px;
  margin: 5px;
  background-color: var(--noir);

}

.Acc-nav_active .burger div {
  background-color: var(--noir);
}

@media (max-width: 1000px) {
  .logo img {
    width: 600px;
  }

}

@media (max-width: 953px) {
  .logo img {
    width: 525px;
  }
}

@media (min-width: 768px) {
  .logo .desktop {
    display: block;
  }

  .logo .mobile {
    display: none;
  }
}

@media (max-width: 768px) {
  .logo .desktop {
    display: none;
  }

  .logo .mobile {
    width: 100px;

  }
}


@media (max-width: 880px) {
  .burger {
    margin-top: -3px;
    display: block;
    margin-right: 42px;
  }

  .burger.burger-active .line1:nth-child(2) {
    opacity: 0;
  }

  .burger.burger-active .line1:nth-child(1) {
    transform: translateY(10px) rotate(45deg);
  }

  .burger.burger-active .line1:nth-child(3) {
    transform: translateY(-9px) rotate(-45deg);
  }

  .Acc-nav .container-nav>.Acc-cadenas {
    display: none;
  }

  .Acc-nav .container-nav ul li {
    margin: 10px 0;
  }

  .Acc-menu {
    position: absolute;
    left: 0px;
    top: -165%;
    gap: 6;
    display: flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 1);
    width: 100%;
    text-align: center;
    transition: 0.3s;
    margin-top: 80px;
  }

  .Acc-nav a {
    color: var(--noir);
  }

  li {
    margin: 16px 0;
  }

  .Acc-menu.Acc-menu.Acc-menu-active {
    top: 0px;
  }

}</style>