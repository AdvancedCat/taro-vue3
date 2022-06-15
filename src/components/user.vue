<template>
  <view class="index">
    <text>这是user页面 - 测试命名路由</text>
    <text>id: {{ $route.params.id }}</text>
    <router-link class="tab-item" :to="$route.params.id+'/profile'"><text>Profile</text></router-link>
    <router-link class="tab-item" :to="$route.params.id+'/posts'"><text>Posts</text></router-link>

    <router-view></router-view>
  </view>
</template>

<script>

</script>
