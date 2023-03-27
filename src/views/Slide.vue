<template>
    <div class="container">
      <Carousel
      :texte="texte"
        :navigation="true"
        :pagination="true"
        :startAutoPlay="true"
        :timeout="6000"
        class="carousel"
        v-slot="{ currentSlide }"
      >
      
        <Slide v-for="(slide, index) in carouselSlides " :key="index"  class="slide">
            <div v-show="currentSlide === index + 1" class="slide-info">
              <div class="tableau">
        <p>gggg</p>
      </div>
            <img :src="require(`../assets/${slide}.jpg`)" alt="" />
          </div>     
        </Slide>
      </Carousel >
    </div>
  </template>
  
  <script>
  import Carousel from '@/components/slide/Carousel.vue'
  import Slide from "@/components/slide/Slide.vue";
  
  export default {
    name: "ViewSlide",
    components: { Carousel, Slide },
    setup() {
      const carouselSlides = ["bg-1", "bg-2", "bg-3"];
      const texte = ["un", "deux", "trois"];
  
      return { carouselSlides , texte };
    },
  };
  </script>
  
  <style lang="css" scoped>
  .container{
    width: 100%;
    height: 60vh;
    border: 1px solid red;
  
  }
  .carousel {
    position: relative;
    height: 85%;
    max-width: 600px;
    margin: 0 auto;
    border: 1px solid red;
  
    
  }

  .slide-info {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      max-height: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row-reverse;
    }
    .slide-info   img {
        min-width: 50%;
        height: 50%;
        object-fit: cover;
      }
  </style>
  