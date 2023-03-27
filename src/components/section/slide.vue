<template>
    <VueAIcarousel :Property="{ID: 'One', }">
        <CardSilde v-for="card in 10" :key="card.id"/> 
    </VueAIcarousel>
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

</style>

<style >

.Slider_Button , .PeVNCommon{
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