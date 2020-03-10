<template>
  <div class="">
    <button @click="setcounter">click</button>
    <div>
      <nuxt-link to="/about"> About </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  layout: 'default',
  methods: {
    setcounter () {
      this.$store.commit('setcount', 4)
    },
    ...mapMutations({
      setcount: 'setcount'
    })
  },
  created: function() {
    this.setcounter()
  }
}
</script>

<style lang="scss">

.custom-indicators {
  background: transparent;
  position:absolute;
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
