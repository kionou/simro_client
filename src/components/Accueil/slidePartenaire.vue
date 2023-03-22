<template>
    <VueAIcarousel :Property="{ID: 'One'}">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </VueAIcarousel>
    
    <VueAIcarousel :Property="{ID: 'Two', Dlay:1000}">
      <div class="cards">1</div>
      <div class="cards">2</div>
      <div class="cards">3</div>
      <div class="cards">4</div>
    </VueAIcarousel>
    
    <VueAIcarousel 
      :Property="{
        ID: 'ShouldBe_Unique', 
        NavBtn: 'naveBtnStyle',
        CountPos: 'CounterPosition',
        CounterStyle: 'counterNewStyle',
        CounterActiveStyle: 'CAnewStyle',
        }"
    >
      <div class="cards">1</div>
      <div class="cards">2</div>
      <div class="cards">3</div>
      <div class="cards">4</div>
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

<style scoped>
.cards{
  background: #94fc86;
  height: 8rem;
  width: 12rem;
}
</style>

<style scoped >
.naveBtnStyle{
  height: 50px;
  width: 50px;
  background: orange;
}
.CounterPosition{
  margin-top: -30px;
}
.counterNewStyle{
  background: red;
}
.CAnewStyle{
  background: purple;
}
</style>