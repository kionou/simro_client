<template>
    <div class="cards" v-for="partenaire in partenaires" :key="partenaire.id">
        <div class="image">
        <img :src="getImage(partenaire.image)" alt="">
        </div>
      </div>
</template>

<script>
import { getImage } from '@/lib/getImage';
export default {
    name: 'CardPartenaire',
    props:['partenaires'],

    data() {
        return {
            
        };
    },

    mounted() {        
    },

    methods: {
        getImage:getImage
        
    },
};
</script>

<style lang="css" >
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