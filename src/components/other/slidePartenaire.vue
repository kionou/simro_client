<template>
    
    <VueAIcarousel :Property="{ID: 'Two', Dlay:1000}">
      <div class="cards">
        <div class="image">
        <img src="@/assets/images/favicon1.png" alt="">
        </div>
      </div>
      <div class="cards">
        <div class="image">
        <img src="@/assets/images/logocpc-1.png" alt="">
        </div>
      </div>
      <div class="cards">
        <div class="image">
        <img src="@/assets/images/favicon1.png" alt="">
        </div>
      </div>
      <div class="cards">
        <div class="image">
        <img src="@/assets/images/logocpc-1.png" alt="">
        </div>
      </div>
      <div class="cards">
        <div class="image">
        <img src="@/assets/images/favicon1.png" alt="">
        </div>
      </div>
      <div class="cards">
        <div class="image">
        <img src="@/assets/images/logocpc-1.png" alt="">
        </div>
      </div>
   

    
      
    </VueAIcarousel>
    
  
</template>

<script>
import VueAIcarousel from "vue-ai-carousel"
//import { defineAsyncComponent } from 'vue';

export default ({
  name: 'MyHome',
  components: {
    VueAIcarousel,
    //VueAIcarousel: defineAsyncComponent(() =>import(/*webpackChunkName: "VueAIcarousel" */ 'vue-ai-carousel')),
  }
});
</script>
<style >
.Slider_Button , .PeVNCommon {
    display: none !important;
}
</style>

<style  scoped >

.lC3oC2kE3bD2fB1jC2qB4eF1v div {
    width: 290PX;
    height: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px !important;
    font-weight: 600;
    background-color:transparent !important;
    /* margin: 0 5px; */
    color: var(--noir) !important;
    position: relative;
    z-index: 1;
    margin: 5px;
    flex-direction: column;
    padding: 10px;
    border-radius: 0 !important;
}

.cards .image{
  width:150px ;
  height: 130px !important;
  background-color: var(--blanc) !important;
}
.cards img{
  width:100% ;
  height: auto;
}
</style>