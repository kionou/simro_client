<template>
    <carousel :slides="slides" :textes="textes" :interval="6000" controls indicators></carousel>

  </template>
  
  <script>
import Carousel from '@/components/carousel/Carousel.vue';

  
  export default {
    name: "ViewCaroussel",
    components: { Carousel },
    data: () => ({
      slides: [
        "bg-1.jpg",
        "bg-2.jpg",
        "bg-3.jpg",
      ],
      textes: [      
                ` Titre1`,
                'Titre2',
                'Titre3',
                

            ],
    }),
  };
  </script>
  
  <style></style>
  