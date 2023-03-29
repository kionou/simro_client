<template>
  <div>
    <Header :slides="slides" :textes="textes" :titres="titres" :height="60" />
    <Corps />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Id repellendus laborum laboriosam praesentium magnam
      dolores quisquam fugiat earum! Consectetur fugiat magni quia, aspernatur ipsa illo error pariatur temporibus
      suscipit reiciendis, hic rem veniam officia tenetur, incidunt ab voluptatem eaque. Quam explicabo ipsum sequi
      commodi impedit quaerat, facere voluptates tenetur praesentium corporis natus et autem expedita, maiores est
      doloremque ex error earum! Maiores cum quidem ipsa iusto mollitia placeat saepe atque eligendi odit eum vel tempore
      veniam, voluptate assumenda laudantium aspernatur doloribus laborum sit hic laboriosam voluptatum! Minus iste ut
      debitis error cumque dicta a, recusandae perferendis. Perspiciatis eligendi consequuntur consectetur dignissimos
      amet, sapiente at accusantium tempora qui. Maiores inventore minus magnam itaque voluptas, exercitationem doloribus
      quibusdam ut porro veniam id error tempora obcaecati, dicta blanditiis laboriosam iusto? Necessitatibus mollitia
      aspernatur facilis. Veritatis expedita sit ut inventore libero eaque illum cum minus delectus quia ullam quo fugiat
      quasi aperiam, porro soluta voluptate ipsum, cupiditate dolore. Saepe tempora quo reprehenderit suscipit libero aut
      aperiam culpa sed quibusdam nobis asperiores porro, excepturi delectus magni. Adipisci qui quae assumenda error
      facilis sit impedit excepturi eligendi aspernatur corporis quia dolore fugiat facere debitis id dolores dignissimos,
      ea ratione cupiditate fuga maiores dolorem vitae suscipit. Veritatis.
    </p>
    <!-- <p id="test">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam illo explicabo ipsam perspiciatis consequuntur.
      Magni quo molestiae, cumque quis nihil aut vitae qui nobis iure provident nesciunt rerum unde, debitis excepturi
      dolores, aspernatur aperiam dolor enim! Eius impedit dolore doloremque pariatur voluptatum error quo praesentium!
      Totam eligendi accusantium aut consectetur ab vitae quam, veniam dolor pariatur blanditiis sequi dolorem culpa.
      Fugiat dolorem debitis, culpa sint explicabo ad dolores deserunt vitae, quos quas veniam aliquid asperiores in
      architecto! Eveniet laboriosam et harum vero sint consectetur a molestiae, in assumenda ea minima, quas similique
      dolorum cum aspernatur, possimus rem amet repudiandae corporis.
    </p> -->
  </div>
</template>

<script>
import Header from '@/components/section/header.vue';
import Corps from '@/components/corps.vue'
export default {
  name: 'ViewsAccueil',
  components: {
    Header, Corps
  },

  data() {
    return {
      slides: [
        "images/bg1.jpg",
        "images/bg2.jpg",
        "images/bg3.jpg",
        "images/bg5.jpg",
        "images/bg4.jpg",

      ],
      textes: [
        `Lorem ipsum dolor sit amet consectetur adipisicing.`,
        'texte2',
        'texte3',
        'texte4',
        'texte5',
      ],
      titres: [
        'Titre1',
        'Titre2',
        'Titre3',
        'Titre4',
        'Titre5',
      ]
    };
  },

  mounted() {

  },

  methods: {

  },
};
</script>

<style lang="css" scoped></style>