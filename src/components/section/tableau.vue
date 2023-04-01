<template>
    <div class="container">
        {{ search }}
        <div class="search_wrap search_wrap_5">
				<!-- <input type="text" class="input" placeholder="Effectuez une recherche..." v-model="search" @click="rech">
				<div class="btn">
					<i class="fa-solid fa-magnifying-glass"></i>
				</div>
                <div class="dropdown" v-if="rechdisplay">
                    <ul class="liste">
                        <li>Bonjour</li>
                        <li>Bonjour</li>
                        <li>Bonjour</li>
                        <li>Bonjour</li>
                        <li>Bonjour</li>
                        <li>Bonjour</li>
                        <li>Bonjour</li>
                        <li>Bonjour</li>

                    </ul>
                </div> -->
                <Select /> 
		</div>
        <main class="table">
            <div class="sidebar  ">
      <ul class="nav-links">
        <li  @click="layout = 'riz'" :class="{active:layout === 'riz'}">
            <img src="@/assets/images/icon1.png" alt="">
            <span class="link_name">Riz</span>
        </li>

        <li @click="layout = 'oignon'" :class="{active:layout === 'oignon'}">
            <img src="@/assets/images/icon1.png" alt="">
            <span class="link_name">Oignon</span>
        </li>
       
     
        <li>

        </li>
      </ul>
    </div>
    <div class="two-section">
            <Riz v-if="layout === 'riz'" />
            <Oignon v-if="layout === 'oignon'"/>

    </div>
    </main>
    </div>
</template>

<script>
import Select from '../other/select.vue';
import Oignon from '../other/cptOignon.vue';
import Riz from '../other/cptRiz.vue';
export default {
    name: 'SimroClientTableau',
    components:{ Select , Oignon , Riz},

    data() {
        return {
            layout:'riz',
            search:'',
            rechdisplay:false,
            active:true
        };
    },

    mounted() {
        let sidebar = document.querySelector(".sidebar");
      if (window.screen.width <= 700) {
        sidebar.classList.toggle("close");
      }
        
    },

    methods: {
        rech () {
            console.log('onjour');
            this.rechdisplay = !this.rechdisplay
        
        }
    },
};
</script>

<style lang="css" >


.container{
    /* max-width: var(--max-width); */
    margin: 0 auto;
    padding: 10px;
}

.search_wrap{
    max-width: 500px;
	width: 100%;
	margin: 15px auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
    padding: 0 10px;
}

main.table {
    box-shadow:0px 0px 10px #8888884f;
    overflow: hidden;
    /* border: 1px solid blue; */
    position: relative;
    /* display: flex;
    justify-content: space-between; */
}

.sidebar {
 /* border: 1px solid rgb(0, 51, 255); */
width: 150px;
height: 100%;
display: flex;
align-items: center;
background-color: var(--vert);
/* color: var(--blanc); */
margin-right: 10px;
position: absolute;
z-index: 100;
}

.sidebar.close {
  width: 30px;
}
.two-section{
/* border: 1px solid red; */
/* width: 1140px; */
position: relative;
  height: 100%;
  left: 150px;
  width: calc(100% - 150px);
  position: relative;
}
.sidebar.close~.two-section {
  left: 30px;
  width: calc(100% - 30px);
}
.sidebar .nav-links {
  /* height: 100%; */
  /* padding: 30px 0 150px 0; */
  overflow: auto;
  /* border: 1px solid rgb(0, 255, 68); */
width: 100%;
/* height: 300px; */
display: flex;
flex-direction: column;
align-items: center;
}

.sidebar.close .nav-links {
  overflow: visible;
}

.sidebar .nav-links::-webkit-scrollbar {
  display: none;
}

.sidebar .nav-links li {
  position: relative;
  list-style: none;
  transition: all 0.4s ease;
  cursor: pointer;
     width: 100%;
    /* border: 1px solid blue; */
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
    /* background-color: var(--blanc); */
    /* color: var(--vert); */
    padding-right: 5px;
}
.sidebar .nav-links li:hover{
    background-color: var(--blanc);
    cursor: pointer;
    color: var(--vert);

}


.sidebar .nav-links li img {
    width: 37px;
    height: 37px;
    padding: 5px;
    /* border: 1px solid blue; */
}

.sidebar .nav-links li  .link_name {
  font-size: 13px;
  font-weight: 400;
  /* color: var(--blanc); */
  /* transition: all 0.4s ease; */
  width: 100%;
}

.sidebar .nav-links li.active{

  background-color: hsl(162.17deg 89.52% 62.43% / 52%);
  color: var(--blanc);
}


.sidebar.close .nav-links li  .link_name {
  opacity: 0;
  pointer-events: none;
}





</style>