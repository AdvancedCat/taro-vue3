<template>
  <view>
    <view>
      <a href="../index/index">Go to Index</a>
      <view @click="showHistory">打印 history</view>
      <view @click="showLocation">打印 location</view>



      <!--使用 router-link 组件进行导航 -->
      <!--通过传递 `to` 来指定链接 -->
      <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
      <view class="tab-box">
        <router-link class="tab-item" to="/" replace><text>Home</text></router-link> |
        <router-link class="tab-item" to="/tab1?name=hongxin" replace>Tab 1</router-link> |
        <router-link class="tab-item" to="/tab2">Tab 2</router-link> |
        <router-link class="tab-item" to="/tab3/1234">Tab 3</router-link> |
        <router-link class="tab-item" :to="{ name: 'user', params: { id: '1234' }}">User</router-link> |
      </view>

      <router-view></router-view>
    </view>

  </view>
</template>

<script setup>
  import './index.scss'

  function showHistory(){
    console.log('history', window.history)
  }

  function showLocation(){
    console.log('location', window.location)
  }
</script>
