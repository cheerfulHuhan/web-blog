<template>
  <div
    v-for="item in props.userInfoList"
    :key="item.id"
    class="userInfo-item-content">
    <div class="userInfo-content">
      <img class="item-avatar" :src="item.avatar" alt="">  
      <div>
        <h1>{{ item.name }}</h1>
        <p>{{ item.introduce }}</p>
      </div>
    </div>
    <el-button type="success">
      关注
    </el-button>
  </div>
</template>
<script lang="ts" setup>
  import {userInfoType} from '@/components/TitleItem/types'
import { PropType } from 'vue';
  const props=defineProps({
    userInfoList:{
      type:Array as PropType<userInfoType[]>,
      required:true
    }
  })
</script>
<style lang="scss" scoped>
  .userInfo-item-content{
    display: flex;
    width: 100%;
    height: 100px;
    padding: 10px;
    border: 1px solid rgb(228, 231, 237);
    align-items: center;
    .userInfo-content{
      display: flex;
      flex: 1;
      align-items: center;
      .item-avatar{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 50px;
        background-position: center;
        background-size: cover;
      }
    }
  }
</style>