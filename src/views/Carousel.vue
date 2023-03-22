<template>
    <carousel :slides="slides" :interval="3000" controls indicators></carousel>
    <slidePartenaire></slidePartenaire>
  </template>
  
  <script>
import Carousel from '@/components/carousel/Carousel.vue';
import slidePartenaire from '@/components/Accueil/slidePartenaire.vue';
  
  export default {
    name: "ViewCaroussel",
    components: { Carousel , slidePartenaire},
    data: () => ({
      slides: [
        "https://picsum.photos/id/1032/900/400",
        "https://picsum.photos/id/1033/900/400",
        "https://picsum.photos/id/1037/900/400",
        "https://picsum.photos/id/1035/900/400",
        "https://picsum.photos/id/1036/900/400",
      ],
    }),
  };
  </script>
  
  <style></style>
  