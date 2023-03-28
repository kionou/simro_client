<template>
  <div class="container-fluid">
    <!-- section carousel debut -->
    <section class="slide-container">
      <div class="slide-container1">
        <div class="container-slide">
      <Slide />
    </div>
      </div> 
    </section>
<!-- section description debut -->
    <section class="description">
      <Description /> 
    </section>
    <section class="magasin">
      <h2>Liste des Magasins</h2>
      <Magasin /> 
    </section>

    <section class="tableau">
      <h2>Prix & Stocks</h2>
      <Tableau /> 
    </section>
    

    <!-- section partenaire debut -->
    <section class="partenaire">
      <Partenaire /> 
    </section>

    <!-- section contact debut  -->
    <section class="contact" id="contact">
      <Contact /> 
    </section>
  </div>
</template>

<script>
  import Slide from '../components/section/slide.vue';
import Contact from './section/contact.vue';
import Description from './section/description.vue';
import Magasin from './section/magasin.vue';
import Tableau from './section/tableau.vue';
import Partenaire from './section/partenaire.vue';


export default {
  name: 'ClientCorps',
  components:{ Slide ,Description ,Magasin, Partenaire,Tableau , Contact },

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
.container-fluid{
  max-width: 100%;
  height: auto;
  position: relative;

}
/* slide debut */
.slide-container{
  width: 100%;
  height: 190px;
  background-color: var(--vert);
  padding: 0 10px;

}
.slide-container1{
  width: 100%;
  height: 100%;
  position: relative;
  margin: 0 auto;
  max-width: var(--max-width);

}
.slide-container .container-slide{
background-color: var(--blanc);
width: 100%;
position: absolute;
top: 8%;
left: 0;
padding: 8px;
border-radius: var(--raduis);
max-width: var(--max-width);
margin: 0 auto;

}
/* slide fin */

/* description debut */
.description{
width: 100%;
height: auto;
background-color: var(--blanc);
padding-bottom: 30px;

}


/* magasin debut */
.magasin{
  width: 100%;
  height: auto;
  padding: 20px 0;
}
.magasin h2{
  text-align: center;
    padding: 20px;
    font-weight: bold;
    font-size: 30px;
    line-height: 36px;
    text-transform: uppercase;
}
/* tableau debut */
.tableau{
  width: 100%;
  height: auto;
  padding: 20px 0;
  background-color: var(--blanc);
}
.tableau h2{
  text-align: center;
    padding: 20px;
    font-weight: bold;
    font-size: 30px;
    line-height: 36px;
    text-transform: uppercase;
}
/* partenaire debut */
.partenaire{
  width: 100%;
  height: auto;
  padding: 20px 0;
  background-color: var(--vert);

}

/* contact debut */
.contact{
  width: 100%;
  height: auto;
  background-color: var(--blanc);
  padding:0 10px 40px;
}


</style>