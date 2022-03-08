<template>
  <header class="header-content">
    <div class="logo">
      <img class="logo-content" alt="">
    </div>
    <div>
      <router-link to="/home">
        首页
      </router-link> 
      <router-link to="/about">
        通知
      </router-link>
    </div>
    <el-input
      v-model="searchValue"
      class="w-50 m-2"
      size="large"
      placeholder="搜索文章内容"
      style="width:250px;"
      :prefix-icon="Search"
    />
    <el-button type="primary">
      <router-link to="/addTitle">
        <el-icon style="vertical-align: middle;">
          <edit />
        </el-icon>
        <span>写文章</span>
      </router-link>
    </el-button>
    <el-button type="primary">
      <router-link to="/viewMd">
        <el-icon style="vertical-align: middle;">
          <edit />
        </el-icon>
        <span>看文章</span>
      </router-link>
    </el-button>
    <img class="head" src="@/assets/logo.png" alt="">
  </header>
</template>

<script lang="ts" setup>
import { Search,Edit } from '@element-plus/icons-vue'
import { ref } from 'vue';
const searchValue=ref<string>("")
</script>

<style lang="scss" scoped>
.header-content{
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 10px;
  overflow: hidden;
  border: 1px solid rgb(228, 231, 237);
    a {
      margin:0 30px ;
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  .logo{
    height: 100%;
    width: 200px;
    overflow: hidden;
  .logo-content{
    position: relative;
    left: -1px;
    top: -1px;
    width: 202px;
    height: 84px;
    margin: 0 auto;
    background-image: url("@/assets/images/logo.png");
    background-repeat: no-repeat;
    background-size:cover;
    background-position-y: center; 
    border: none;
  }

  }
  .head{
    height: 50px;
    width: 50px;
    border-radius: 50% 50%;
    background-size: cover;
    background-position-y: center;
  }
}
</style>