<template>
  <div class="container-fluid">
    <div class="slide-container">
      <div class="slide-container1">
        <div class="container-slide">
      <Slide />
    </div>
      </div>
     
    </div>
    <div class="description">
      <div class="content">
        <h2>Bienvenue A Simro</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis explicabo laboriosam vero, quis ullam aperiam, incidunt repellendus culpa est obcaecati tempora quibusdam maiores minima quisquam sed tempore harum assumenda voluptatibus!</p>
        <div class="content-card">
          <div class="card">
            <div class="image">
              <img src="@/assets/images/vision.jpg" alt="">
            </div>
            <h4>Nos missions</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat perferendis tempore incidunt. Minima iste consequuntur facilis totam! Facilis, autem accusantium? Nisi quidem consectetur culpa asperiores nulla natus aliquid cum a!</p>
          </div>
          <div class="card">
            <div class="image">
              <img src="@/assets/images/vision.jpg" alt="">
            </div>
            <h4>Notre vision</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat perferendis tempore incidunt. Minima iste consequuntur facilis totam! Facilis, autem accusantium? Nisi quidem consectetur culpa asperiores nulla natus aliquid cum a!</p>
          </div>
          <div class="card">
            <div class="image">
              <img src="@/assets/images/vision.jpg" alt="">
            </div>
            <h4>Nos valeurs</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat perferendis tempore incidunt. Minima iste consequuntur facilis totam! Facilis, autem accusantium? Nisi quidem consectetur culpa asperiores nulla natus aliquid cum a!</p>
          </div>

        </div>


      </div>
    </div>
    <!-- <div class="tableau"><h2>Tableau</h2></div> -->
    <div class="partenaire">
      <div class="partenaire-content">
        <h2>Nos Partenaires</h2>
        <p>Ils nous accompagnemt</p>
         <SlidePartenaire /> 

      </div>
    </div>
    <div class="contact">
      <h2>contact</h2>
      <div class="contact-content">
        <div class="content-card">
          <i class="fa-solid fa-location-dot"></i>
          <span>Adresse</span>
          <p>
            Rond point Cité Keur Gorgui, Immeuble résidences Patrick Onana | Yaoudé, Cameroun
          </p>
          
        </div>
        <div class="separation">

        </div>
        <div class="content-card">
          <i class="fa-solid fa-phone"></i>
          <span>Téléphone</span>
          <p>
            Tél: +237 222 89 56 23 77 <br>
            Email: simro@gmail.com
          </p>
          
        </div>
        <div class="separation">

          </div>
        <div class="content-card">
          <i class="fa-solid fa-clock"></i>
          <span>Temps de travail</span>
          <p>
           Du Lundi au Vendredi <br> 08h00 à 18h00
          </p>
          
        </div>

      </div>
    </div>
   


  </div>
</template>

<script>
import Slide from './slide.vue';
  import SlidePartenaire from './slidePartenaire.vue';

export default {
  name: 'ClientCorps',
  components:{ Slide ,SlidePartenaire },

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
  /* border: 1px solid red; */
  height: auto;
  /* padding:10px; */
  position: relative;

}
.slide-container{
  width: 100%;
  height: 120px;
  background-color: var(--vert);

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
/* height: 200px; */
width: 100%;
position: absolute;
top: -50%;
left: 0;
padding: 8px;
border-radius: var(--raduis);
max-width: var(--max-width);
margin: 0 auto;

}
.description{
/* border: 1px solid red; */
width: 100%;
height: auto;
background-color: var(--blanc);
padding-bottom: 30px;

}
.description .content{
  max-width: var(--max-width);
  margin: 0 auto;
  height: auto;
  /* border: 1px solid blue; */
      display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;


}
.description .content h2{
  text-align: center;
    padding: 20px;
    font-weight: bold;
    font-size: 30px;
    line-height: 36px;
    /* color: var(--blanc); */
    text-transform: uppercase;
}
.description .content p{
  padding: 10px;
  text-align: center;

}
.description .content .content-card{
/* border: 1px solid red; */
width: 100%;
height: auto;
display: flex;
justify-content: space-around;
text-align: justify;
margin-top: 10px;


}

.description .content .content-card .card{

  /* border: 1Px solid blue; */
  width: 30%;
  height: 99%;
  margin: 0 10px;
      display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding:10px;
    border-radius: var(--raduis);
    box-shadow: var(--shadow-medium);

}
.card h4{
  padding: 10px 0;

}
.description .content .content-card .card .image{
  width: 90px;
  height: 90px;

}
.description .content .content-card .card .image img{
  width: 100%;
  height: 100%;
}
/* .content-card .card  */
@media (max-width: 768px) {
  .description .content .content-card{

flex-direction: column;
align-items: center;


}
.description .content .content-card .card{

width: 100%;
max-width: 290px;
height: 261px;
margin:  10px;


  }

}

.tableau{
  width: 100%;
  height: auto;
  padding: 20px 0;
}
.partenaire{
  width: 100%;
  height: auto;
  padding: 20px 0;
  background-color: var(--vert);

}
.partenaire-content{
  max-width: var(--max-width);
  margin: 0 auto;
  height: auto;
  /* border: 1px solid red; */
  color: var(--blanc);
  padding-bottom: 20px;

}
.partenaire-content h2{
  text-align: center;
    padding: 20px;
    font-weight: bold;
    font-size: 30px;
    line-height: 36px;
    /* color: var(--blanc); */
    text-transform: uppercase;
}
.partenaire-content p{
  padding: 10px;
  text-align: center;

}
.contact{
  width: 100%;
  height: auto;
  background-color: var(--blanc);
  padding:0 10px 40px;
}
.contact h2{
  text-align: center;
    padding: 20px;
    font-weight: bold;
    font-size: 30px;
    line-height: 36px;
    color: var(--vert);
    text-transform: uppercase;
}
.contact-content{
max-width: var(--max-width);
margin: 0 auto;
/* height: 300px; */
/* border: 1px solid red; */
padding: 10px;
display: flex;
    align-items: center;
    justify-content: space-evenly;
    box-shadow: var(--box-shadow);

}
.contact-content .content-card{
  /* border: 1px solid rgb(60, 255, 0);    */
  width: 300px;
  height: 250px;
  display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px;
    margin-right: 5px;

}
.contact-content .separation{
  border-right: 1px solid var(--vert);
	height: 250px;
	}

.contact-content .content-card i{

color: var(--vert);
font-size: 40px;
}
.contact-content .content-card span{
  font-weight: 600;
}
.contact-content .content-card p{
  text-align: center;

}
@media (max-width: 768px) {
  .contact-content .separation{
  border-right: none;
	height: 0;
  border-bottom: 1px solid var(--vert);
  width: 250px;
	}
  .contact-content{
max-width: 400px;
width: 90%;
flex-direction: column;

}

}

</style>