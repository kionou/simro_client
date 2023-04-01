<template>
   
    <!-- <div class="container"> -->
    <VueAIcarousel :Property="{ID: 'Tw', Dlay:1000}">
    
        <CardSilde :produits="produits" /> 
     
  
   
    </VueAIcarousel>

    
 
</template>

<script>
import VueAIcarousel from "vue-ai-carousel"
import CardSilde from "./cardSilde.vue";
export default {
  name: 'MyHome',
  data() {
    return {
      produits: '',
    };
  },
  components: {
    VueAIcarousel, CardSilde

  },
  mounted() {
    const response = require('@/lib/marche.json')
        this.produits = response
  },
};
</script>

<style scoped>
/* .container{

border: 1px solid red;
max-width: var(--max-width);
margin: 0 auto;
padding-bottom: 6px;

} */
.cards{
  /* background: #94fc86; */
  height: 9rem;
  width: 12rem;
}
.lC3oC2kE3bD2fB1jC2qB4eF1v div {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px !important;
    font-weight: 600;
    background-color:white !important;
    /* margin: 0 5px; */
    color: var(--noir) !important;
    position: relative;
    z-index: 1;
    /* margin: 5px; */
    flex-direction: column;
    /* padding: 10px; */
    border-radius: 0 !important;
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