<template>
  <div>
    <Header :slides="slides" :textes="textes" :titres="titres" :height="80"/>
    <Corps />

   
  </div>
</template>

<script>
import Header from '@/components/Accueil/header.vue';
import Corps from '@/components/Accueil/corps.vue'
export default {
  name: 'ViewsAccueil',
  components:{
    Header , Corps
  },

  data() {
    return {
      slides:[
                "images/bg1.jpg",
                "images/bg2.jpg",
                "images/bg3.jpg",
                "images/bg5.jpg",
                "images/bg4.jpg",
               
            ],
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="css" scoped>

</style>