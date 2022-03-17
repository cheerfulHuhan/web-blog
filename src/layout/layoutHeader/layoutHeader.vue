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
    <el-button type="primary" @click="jumpWrite('/addTitle')">
      <el-icon style="vertical-align: middle;">
        <edit />
      </el-icon>
      <span>写文章</span>
    </el-button>
    <el-button
      type="primary" @click="jumpWrite('/viewMd')">
      <el-icon style="vertical-align: middle;">
        <edit />
      </el-icon>
      <span>看文章</span>
    </el-button>
    <el-button type="primary" @click="jumpWrite('/register')">
      <el-icon style="vertical-align: middle;">
        <edit />
      </el-icon>
      <span>注册用户</span>
    </el-button>
    <el-dropdown>
      <span class="el-dropdown-link">
        <img class="head" src="@/assets/logo.png" alt="">
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>
            <router-link to="/addTitle">
              <el-icon style="vertical-align: middle;">
                <EditPen />
              </el-icon>
              <span>写文章</span>
            </router-link>
          </el-dropdown-item>
          <el-dropdown-item>
            <router-link to="/person/title">
              <el-icon style="vertical-align: middle;">
                <User />
              </el-icon>
              <span>个人中心</span>
            </router-link>
          </el-dropdown-item>
          <el-dropdown-item>
            <router-link to="/person/collect">
              <el-icon style="vertical-align: middle;">
                <Star />
              </el-icon>
              <span>我的收藏</span>
            </router-link>
          </el-dropdown-item>
          <el-dropdown-item>
            <router-link to="/editUserInfo">
              <el-icon style="vertical-align: middle;">
                <Avatar />
              </el-icon>
              <span>编辑个人资料</span>
            </router-link>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </header>
</template>

<script lang="ts" setup>
import { Search,Edit,EditPen,User,Star,Avatar } from '@element-plus/icons-vue'
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const searchValue=ref<string>("")
const route=useRouter()
const jumpWrite=(path:string,params?:any)=>{
  route.push({
    path:path
  })
}
</script>

<style lang="scss" scoped>
.header-content{
  display: flex;
  position: relative;
  width: 100%;
  height: 100px;
  justify-content: space-evenly;
  align-items: center;
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
    height: 100px;
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
  .example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
}
</style>