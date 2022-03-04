<template>
  <header class="header-content">
    <router-link to="/home">
      Home
    </router-link> |
    <router-link to="/about">
      About
    </router-link>
  </header>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.header-content{
  width: 100%;
  height: 100px;
  background-color: aqua;
    a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>