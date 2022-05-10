<template>
  <view>
    <view>
      <a href="../index/index">Go to Index</a>
      <view @click="showHistory">show history</view>
      <view @click="showLocation">show location</view>



      <!--使用 router-link 组件进行导航 -->
      <!--通过传递 `to` 来指定链接 -->
      <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
      <view class="tab-box">
        <router-link class="tab-item" to="/tab1?name=hongxin" replace>Tab 1</router-link> |
        <router-link class="tab-item" to="/tab2">Tab 2</router-link> |
        <router-link class="tab-item" to="/tab3/1234">Tab 3</router-link> |
        <router-link class="tab-item" :to="{ name: 'user', params: { username: 'hongxin' }}">User</router-link> |
      </view>

      <router-view></router-view>
    </view>

  </view>
</template>

<script setup>
  import {window, history, location} from '@tarojs/runtime'
  import { ref, onMounted } from 'vue'
  // import {RouterView, RouterLink} from 'vue-router'
  import './index.scss'

  function showHistory(){
    console.log('history', history)
  }

  function showLocation(){
    console.log('location', location)
  }
</script>
