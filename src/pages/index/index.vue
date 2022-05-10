<template>
  <a href="../custom/index">Go to Custom</a>
  <a href="#/" @click="clickLink">Home</a> |
  <a href="#/about" @click="clickLink">About</a> |
  <!-- <a href="#/non-existent-path">Broken Link</a> -->
  <component :is="currentView" />


  <view @click="showHistory">history</view>
  <view @click="showLocation">location</view>
</template>

<script>
import './index.scss'

import Home from './Home.vue'
import About from './About.vue'
const routes = {
  '/': Home,
  '/about': About
}

export default {
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  methods: {
    clickLink(event){
      console.log('触发点击',event,  event.target)
      const href = event.target.dataset.href
      window.history.pushState(null, '', href)
    },

    showHistory(){
      console.log('history', window.history, this.currentPath, this.currentView)
    },

    showLocation(){
      console.log('location', window.location)
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || NotFound
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
      console.log('我被触发了')
		  this.currentPath = window.location.hash
		})
  }
}
</script>
