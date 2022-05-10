<template>
  <a href="../custom/index">Go to "vue-router"</a>
  <view @click="showHistory">history</view>
  <view @click="showLocation">location</view>

  <view class="tab-box">
    <view class="tab-item" data-hash="#/" @click="clickLink">Home</view>
    <view class="tab-item" data-hash="#/about" @click="clickLink">About</view>
  </view>
  <component :is="currentView" />

</template>

<script>
// 示例来源于Vue官方文档： https://staging-cn.vuejs.org/guide/scaling-up/routing.html#simple-routing-from-scratch
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
      const hash = event.target.dataset.hash
      window.history.pushState(null, '', hash)
    },

    showHistory(){
      console.log('history', window.history)
    },

    showLocation(){
      console.log('location', window.location)
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/']
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
      console.log('hash变更')
		  this.currentPath = window.location.hash
		})
  }
}
</script>
