<template>
  <div class=".carousel-control">
          <i class="fa-solid fa-chevron-right" ></i>
               <i class="fa-solid fa-chevron-left" ></i>
    <VueAIcarousel :Property="{ID: 'One', }">
        <CardSilde v-for="card in 1" :key="card.id" />
    </VueAIcarousel>
  </div> 
</template>

<script>
import VueAIcarousel from "vue-ai-carousel"
import CardSilde from "../other/cardSilde.vue";



export default ({
  name: 'MySlide',
  components: {
    VueAIcarousel, CardSilde

  }
});
</script>
<style scoped>
.hH6bF5bC7dM2dF4iB1eJ1eD4k .Previous{
  color: var(--vert) !important;

}
.hH6bF5bC7dM2dF4iB1eJ1eD4k .Next{
  color: var(--red) !important;

}
.lC3oC2kE3bD2fB1jC2qB4eF1v div:last-child{

  margin-left: 0 !important;
}
.lC3oC2kE3bD2fB1jC2qB4eF1v div{

  
    /* display: flex; */
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: 12px !important;
    font-weight: 600;
    background-color:transparent !important;
    color: var(--noir) !important;
    position: relative;
    z-index: 1;
    flex-direction: column;
    border-radius: 0 !important;
    margin: 0 10px !important;
}
.PeVNCommon{
   top: 37% !important;
   font-size: 36px;
   text-shadow: none !important;
   height: 0 !important;
   width: 0 !important;
   padding: 22px;
   text-shadow: none !important;
   /* display: block !important; */
}
 .fa-solid{
    position: absolute;
    font-weight: 900;
    font-size: 30px;
    top: 37%;
    padding: 10px;
    z-index: 7;
    background: #ffffff8a;

 }
 .fa-chevron-right{
    right: 0;
    color: var(--red);
 }
 .fa-chevron-left{
    left: 0;
    color: var(--vert);
 }


 @media (max-width: 457px) {
  .fa-solid{
    font-size: 22px;
  
  }

}

</style>



<style  >

.Slider_Button {
    display: none !important;
}



.lC3oC2kE3bD2fB1jC2qB4eF1v div {
    width: 15rem;
    height: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px !important;
    font-weight: 600;
    background-color:var(--blanc) !important;
    color: var(--noir) !important;
    position: relative;
    z-index: 1;
    margin: 5px;
    flex-direction: column;
    padding: 5px;
}
.lC3oC2kE3bD2fB1jC2qB4eF1v div:first-child{

margin-left: auto;
}


</style>