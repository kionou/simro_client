<template>
  <transition :name="transitionEffect">
    
    <div class="carousel-item" v-show="currentSlide === index" @mouseenter="$emit('mouseenter')"
      @mouseout="$emit('mouseout')">
      <div class="texte">
        <p>{{ texte }}</p>
      </div>
      <img :src="getImage(slide)" />
      
    </div>
    
  </transition>
 
</template>

<script>
export default {
  emits: ["mouseenter", "mouseout"],
  props: ["slide", "currentSlide", "index", "direction" , 'texte'],
  computed: {
    transitionEffect() {
      return this.direction === "right" ? "slide-out" : "slide-in";
    },
  },
  methods: {
    getImage(path){
      try{
        return this.slide.startsWith('http') ? this.slide : require('@/assets/' + path)
      } catch(e){
        // return require('@/assets/naniens/no.png')
      }
    }
  },
  mounted() {
    // console.log(this.index);
  },
};
</script>

<style scoped>
.carousel-item {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.slide-in-enter-active,
.slide-in-leave-active,
.slide-out-enter-active,
.slide-out-leave-active {
  transition: all 1s ease-in-out;
}

.slide-in-enter-from {
  transform: translateX(-100%);
}

.slide-in-leave-to {
  transform: translateX(100%);
}

.slide-out-enter-from {
  transform: translateX(100%);
}

.slide-out-leave-to {
  transform: translateX(-100%);
}

.texte{
  position: absolute;
  z-index: 1;
  top: 30%;
  font-size: 50px;
  left: 22%;
  max-width: var(--max-width);
}
.carousel-item img{
  width: 100%;
  height: 100%;


}
</style>
