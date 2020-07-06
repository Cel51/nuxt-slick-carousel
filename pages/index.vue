<template>
  <div class="row">
    <div class="col-6">
      <h1>SSR - Imported images</h1>
      <VueSlickCarousel v-bind="settings" :key="`SSR_slick-slider`" @init="endSSR">
        <div class="slide">
          <img src="~/assets/images/1-1920x500.jpg" alt="">
        </div>
        <div class="slide">
          <img src="~/assets/images/2-1920x500.jpg" alt="">
        </div>
        <div class="slide">
          <img src="~/assets/images/3-1920x500.jpg" alt="">
        </div>
      </VueSlickCarousel>
    </div>
    <div class="col-6">
      <h1>NO SSR - Imported images</h1>
      <client-only>
        <VueSlickCarousel v-bind="settings" :key="`NO-SSR_slick-slider`" @init="endNoSSR">
          <div class="slide">
            <img src="~/assets/images/4-1920x500.jpg" alt="">
          </div>
          <div class="slide">
            <img src="~/assets/images/5-1920x500.jpg" alt="">
          </div>
          <div class="slide">
            <img src="~/assets/images/6-1920x500.jpg" alt="">
          </div>
        </VueSlickCarousel>
      </client-only>
    </div>
    <div class="col-6">
      <h1>SSR - in store images</h1>
      <VueSlickCarousel v-bind="settings" :key="`SSR_slick-slider_store`" @init="endStoreSSR">
        <div class="slide" v-for="image in images_ssr">
          <img :src="image" alt="">
        </div>
      </VueSlickCarousel>
    </div>
    <div class="col-6">
      <h1>NO SSR - in store images</h1>
      <client-only>
        <VueSlickCarousel v-bind="settings" :key="`NO-SSR_slick-slider_store`" @init="endStoreNoSSR">
          <div class="slide" v-for="image in images_no_ssr">
            <img :src="image" alt="">
          </div>
        </VueSlickCarousel>
      </client-only>
    </div>
    <div class="col-6">
      <h1>SSR - from store with Netplus Fix</h1>
      <div class="position-relative">
        <div class="slide" :class="{'opacity-0': initNetplus}">
          <img :src="images_netplus_ssr[0]" alt="">
        </div>
        <VueSlickCarousel v-bind="settings" :key="`SSR_slick-slider_netplus_store`" @init="netplus_slider" class="position-absolute h-100 w-100" style="top: 0">
          <div class="slide" v-for="image in images_netplus_ssr">
            <img :src="image" alt="">
          </div>
        </VueSlickCarousel>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css';
  import VueSlickCarousel from 'vue-slick-carousel';

  export default {
    layout: 'default',
    data() {
      return {
        settings: {
          "arrows": false,
          "infinite": true,
          "edgeFriction": 0.35,
          "slidesToShow": 1,
          "slidesToScroll": 1,
          "autoplay": true,
          "speed": 1000,
          "autoplaySpeed": 2000,
          "lazyLoad": "ondemand",
          "dots": true,
          "dotsClass": "slick-dots custom-indicators"
        },
        initNetplus: false
      }
    },
    components: {
      VueSlickCarousel
    },
    computed: {
      ...mapGetters([
        'GET_STORE_SSR',
        'GET_STORE_NO_SSR',
        'GET_STORE_NETPLUS_SSR'
      ]),
      images_ssr() {
        return this.GET_STORE_SSR
      },
      images_no_ssr() {
        return this.GET_STORE_NO_SSR
      },
      images_netplus_ssr() {
        return this.GET_STORE_NETPLUS_SSR;
      }
    },
    methods: {
      netplus_slider() {
        this.initNetplus = true;
      },
      endSSR() {
        console.timeEnd('ssr');
      },
      endNoSSR() {
        console.timeEnd('no_ssr');
      },
      endStoreSSR() {
        console.timeEnd('store_ssr');
      },
      endStoreNoSSR() {
        console.timeEnd('store_no_ssr');
      }
    },
    created: function () {
      console.time('ssr');
      console.time('no_ssr');
      console.time('store_ssr');
      console.time('store_no_ssr');
    },
  }
</script>

<style lang="scss">

  .opacity-0 {
    opacity: 0;
  }

  .custom-indicators {
    background: transparent;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 2em 0 !important;
  }

  .slick-dots {
    width: 100%;
    padding: 0;
    color: red;
    font-weight: 300;
    margin: 0;
    text-align: center;
    list-style: none;

    li {
      width: 50px;
      height: 5px;
      cursor: pointer;
      position: relative;
      display: inline-block;
      margin: 0 5px;
      padding: 0;
      font-weight: 300;
      color: blue;

      &:not(.slick-active) {
        background: #fff;
      }

      &.slick-active {
        background-color: #51c5ff;
        opacity: .93;
      }

      button {
        font-size: 0;
        line-height: 0;
        display: block;
        padding: 5px;
        color: transparent;
        border: 0;
        outline: none;
        background: transparent;
        width: 50px;
        height: 5px;
        cursor: pointer;
      }
    }
  }


  .slick-slider[data-v-aa003c28] .slick-dots button::before {

    color: green;
    opacity: .25;

  }

  .slick-slider[data-v-aa003c28] .slick-dots li {
    width: 20px;
  }

  .slick-slider[data-v-aa003c28] .slick-dots .slick-active button::before {
    opacity: 1;
  }

  .slick-dots li button::before {
    font-family: slick;
    font-size: 30px;
    line-height: 5px;
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 5px;
    content: "•";
    text-align: center;
    opacity: .25;
    color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }


  .slide {
    width: 100%;
    color: white;
    img {
      max-width: 100%;
    }
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
