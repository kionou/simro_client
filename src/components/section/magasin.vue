<template>
    <div>
        <div class="container">
            
            <CardMagasin v-for="card in 2" :key="card.id" />
        </div>
      
    </div>
</template>

<script>
import CardMagasin from '../other/cardMagasin.vue';
export default {
    name: 'CPtMagasin',
    components:{
        CardMagasin
    },

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="css" scoped>
.container{
    max-width: var(--max-width);
    margin: 0 auto;
    height: auto;
    padding: 5px;
    /* border: 1px solid; */
    display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, auto));
  grid-gap: 5px;
  justify-items: center;
    align-items: center;
    justify-content: space-evenly;
 

}


</style>