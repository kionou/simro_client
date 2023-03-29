<template>
   <div class="cards">
        <img src="@/assets/images/Oignon-de-garde.png" alt="">
        <p>oignon</p>
        <p> 675 F CFA </p>
    </div>
</template>

<script>
export default {
    name: 'SimroClientCardSilde',

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