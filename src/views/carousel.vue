<template>
   
    <div class="container">
    <VueAIcarousel :Property="{ID: 'Two', Dlay:1000}">
      <!-- <div class="card"> -->
    

     
    <div class="cards">
        <img src="@/assets/images/Oignon-de-garde.png" alt="">
        <p>oignon</p>
        <p> 375 F CFA </p>
    </div>
    <div class="cards">
        <img src="@/assets/images/Oignon-de-garde.png" alt="">
        <p>oignon</p>
        <p> 375 F CFA </p>
    </div>
    <!-- <div class="cards">
        <img src="@/assets/images/Oignon-de-garde.png" alt="">
        <p>oignon</p>
        <p> 375 F CFA </p>
    </div>
    <div class="cards">
        <img src="@/assets/images/Oignon-de-garde.png" alt="">
        <p>oignon</p>
        <p> 375 F CFA </p>
    </div>
    <div class="cards">
        <img src="@/assets/images/Oignon-de-garde.png" alt="">
        <p>oignon</p>
        <p> 375 F CFA </p>
    </div> -->
      <!-- </div> -->
      <!-- <div class="cards">2</div> -->
      <div class="cards">3</div>
      <div class="cards">4</div>
      <div class="cards">4</div>
      <div class="cards">4</div>
      <div class="cards">4</div>
   
    </VueAIcarousel>
</div>
<Select /> 
 
</template>

<script>
import VueAIcarousel from "vue-ai-carousel";
import Select from "@/components/other/select.vue";

export default {
  name: 'MyHome',
  components: {
    VueAIcarousel,Select
    //VueAIcarousel: defineAsyncComponent(() =>import(/*webpackChunkName: "VueAIcarousel" */ 'vue-ai-carousel')),
  }
};
</script>

<style scoped>
.container{

border: 1px solid red;
max-width: var(--max-width);
margin: 0 auto;
padding-bottom: 6px;

}
.cards{
  background: #94fc86;
  height: 9rem;
  width: 12rem;
}
.cards .card-image{
    width: 100%;
    height: 63%;
}
.cards  img{
    width: 60%;
    /* height: 100px; */

}
</style>

<style >

</style>