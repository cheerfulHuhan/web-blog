<template>
  <div class="view-content">
    <PersonInfo :user-info="userInfo" />
    <h1>标题</h1>
    <h4>前言</h4>
    <img class="cover" src="https://img1.baidu.com/it/u=1407750889,3441968730&fm=253&fmt=auto&app=120&f=JPEG?w=1200&h=799" alt="">
    <v-md-preview :text="text" style="height: 100%;width: 100%;" />
  </div>
</template>
<script lang="ts" setup>
import {useMd} from '@/stores/md'
import { onMounted, ref } from 'vue';
import PersonInfo from '@/components/personInfo/index.vue'
const md=useMd()
const text=ref<any>()
const userInfo=ref<any>({
      id:20,
      name:'作者',
      avatar:'@/assets/logo.png',
      followNum:1,
      wasFollowNum:30,
      introduce:'懒人',
      fwStatus:false
    })
onMounted(()=>{
  text.value=md.text
      })
      
</script>
<style lang="scss" scoped>
  .view-content{
    width: 60%;
    display: flex;
    margin: 0 auto;
    padding: 20px;
    align-items: center;
    flex-direction: column;
    background-color: #ffffff;
    overflow-y: scroll;
    .cover{
      width: 100%;
      height: 400px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
</style>