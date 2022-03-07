<template>
  <div class="main-content">
    <p>123</p>
    <router-view v-slot="{Component, route: _route}">
      <transition name="fade-transform" mode="out-in">
        <component :is="Component" :key="_route.path" />
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts" setup>
</script>
<style lang="scss" scoped>
.main-content{
  display:flex;
  height:100%;
  width:100%;
  background-color: red;
}
</style>
