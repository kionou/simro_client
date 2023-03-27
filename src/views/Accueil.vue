<template>
  <div>
    <Header :slides="slides" :textes="textes" :titres="titres" :height="60"/>
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
            textes: [      
                `  Lorem ipsum dolor sit amet consectetur adipisicing.`,
                'Titre2',
                'Titre3',
                'Titre4',
                'Titre5',
                

            ],
            titres: [
               'texte1',
               'texte2',
               'texte3',
               'texte4',
               'texte5',
            ]
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