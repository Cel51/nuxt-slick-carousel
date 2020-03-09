<template>
  <div class="">
    <VueSlickCarousel :settings="settings">
      <div class="slide" v-for="index in 10" :key="index">
        <nuxt-link to="about"><img src="https://picsum.photos/id/237/1920/500"/></nuxt-link>
      </div>
    </VueSlickCarousel>
    <ul class="slick-dots custom-dot-class">
    </ul>
    <div>
      <logo />
      <h1 class="title">
        nuxt-slick-carousel
      </h1>
      <h2 class="subtitle">
        My sweet Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'

import Logo from '~/components/Logo.vue'
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
export default {
  data() {
    return {
      settings: {
    "infinite": true,
  "edgeFriction": 0.35,
  "slidesToShow": 1,
  "slidesToScroll": 1,
    "autoplay": true,
  "speed": 2000,
  "autoplaySpeed": 2000,
  "lazyLoad": true,
    "centerMode": true,
      "dots": true,
        "dotsClass": "slick-dots custom-dot-class",
}
    }
  },
  components: {
    Logo,
    VueSlickCarousel
  }
}
</script>

<style>
.slide {
  width: 100%;
  color: white;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
