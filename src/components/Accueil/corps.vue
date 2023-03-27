<template>
  <div class="container-fluid">
    <!-- section carousel debut -->
    <div class="slide-container">
      <div class="slide-container1">
        <div class="container-slide">
      <Slide />
    </div>
      </div> 
    </div>
<!-- section carousel fin -->

<!-- section description debut -->
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

    <!-- section description fin -->
    <!-- <div class="tableau"><h2>Tableau</h2></div> -->
    <!-- section partenaire debut -->
    <div class="partenaire">
      <div class="partenaire-content">
        <h2>Nos Partenaires</h2>
        <p>Ils nous accompagnemt</p>
         <SlidePartenaire /> 

      </div>
    </div>
    <!-- section partenaire fin -->

    <!-- section contact debut  -->
    <div class="contact">
      <h2>contact</h2>
      <div class="contact-content">
        <div class="texte">

          <div class="texte-content">
            <div class="icon">
            <i class="fa-solid fa-location-dot"></i>
            </div>
            <p>
            Rond point Cité Keur Gorgui,
          </p>

          </div>
          <div class="texte-content">
            <div class="icon">
              <i class="fa-solid fa-phone"></i>
            </div>
            
            <p>
              +237 222 89 56 23 77
          </p>

          </div>
          <div class="texte-content">
            <div class="icon">
              <i class="fa-solid fa-envelope"></i>
            </div>
            
            <p>
              Email: simro@gmail.com
          </p>

          </div>
          <div class="texte-content">
            <div class="icon">
              <i class="fa-solid fa-clock"></i>
            </div>
            
            <p>
              Du Lundi au Vendredi <br> 08h00 à 18h00
          </p>

          </div>

        </div>
        <div class="maps">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1990.220815269343!2d11.526605055353668!3d3.928899648961301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bc74c724818fb%3A0x1149b51f007ab3ed!2sSIMRO%20UNIVERS%20TECHNOLOGIES!5e0!3m2!1sfr!2sci!4v1679835161584!5m2!1sfr!2sci" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <!-- <div class="content-card">
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
          
        </div> -->

      </div>
    </div>
   <!-- section contact fin -->


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
/* height: 200px; */
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

/* tableau debut */
.tableau{
  width: 100%;
  height: auto;
  padding: 20px 0;
}

/* partenaire debut */
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
/* contact debut */
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

display: flex;
    align-items: center;
    justify-content: space-evenly;
    box-shadow: var(--box-shadow);
    justify-content: space-between;
    background-color: var(--vert);

}
/* .contact-content .content-card{
  border: 1px solid rgb(60, 255, 0);   
  width: 300px;
  height: 250px;
  display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px;
    margin-right: 5px;

} */
/* .contact-content .separation{
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

} */

.contact-content .texte{
  /* border: 1px solid red; */
  width: 98%;
  max-width: 290px;
  height: 340PX;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: var(--vert);
    color: var(--blanc);

}

.contact-content .texte .texte-content{
/* border: 1px solid blue; */
display: flex;
    justify-content: flex-start;
    padding: 10px;
    align-items: center;


}
.contact-content .texte .texte-content .icon{


width: 35px;
    height: 35px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 10px;
    background-color: hsl(162.17deg 89.52% 62.43% / 52%);
}
.contact-content .texte .texte-content i{

/* color: var(--vert); */
font-size: 15px;

}
.contact-content .texte .texte-content-card p{
  text-align: center;

}
.maps{
/* max-width: 600px; */
width: 100%;
height: 450px;
padding: 10px;
background-color: var(--blanc);

}
iframe{
  width: 100%;
    height: 100%;
}
@media (max-width: 768px) {
  /* .contact-content .separation{
  border-right: none;
	height: 0;
  border-bottom: 1px solid var(--vert);
  width: 250px;
	} */
  .contact-content{
max-width: 600px;
width: 90%;
flex-direction: column;

}

}

</style>