<template>
  <div class="home-content">
    <el-tabs 
      v-model="activeName" 
      class="demo-tab" 
      @tab-click="handleClick">
      <el-tab-pane 
        v-for="item in navList" 
        :key="item.name" 
        :label="item.label" 
        :name="item.name">
        <div class="main-content">
          <div class="main">
            <TitleItem v-model:title-list="titleList" @get-user-id="transportId" />
          </div>
          <div class="side">
            侧边栏
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
    <router-view />
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import TitleItem from '../../components/TitleItem/TitleItem.vue'
import {TitleItemType} from '@/components/TitleItem/types/index'
import {viewUserInfo} from '@/hooks/viewUserInfo'
interface tabItemType{
  label:string
  name:string|number
}
const {transportId} =viewUserInfo()
const navList=ref<tabItemType[]>([{
  label:'前端',
  name:1
},{
  label:'后端',
  name:2
},{
  label:'算法',
  name:3
},{
  label:'人工智能',
  name:4
},{
  label:'Android',
  name:5
}])
  const titleList=ref<TitleItemType[]>([{
    id:4,
    tab:"前端",
    title:'文章',
    describe:'sssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
    eye:1,
    good:2,
    discuss2e:2,
    img:'https://img1.baidu.com/it/u=1407750889,3441968730&fm=253&fmt=auto&app=120&f=JPEG?w=1200&h=799',
    userInfo:{
      id:20,
      name:'作者',
      avatar:'@/assets/logo.png',
      followNum:1,
      wasFollowNum:30,
      introduce:'懒人',
      fwStatus:false

    }
  },{
    id:1,
    tab:"前端",
    title:'文章',
    describe:'ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
    eye:1,
    good:2,
    discuss2e:2,
        userInfo:{
      id:20,
      name:'作者',
      avatar:'@/assets/logo.png',
      followNum:1,
      wasFollowNum:30,
      introduce:'懒人',
      fwStatus:false

    }
  },{
    id:2,
    tab:"前端",
    title:'文章',
    describe:'ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
    eye:1,
    good:2,
    discuss2e:2,
    userInfo:{
      id:20,
      name:'作者',
      avatar:'@/assets/logo.png',
      followNum:1,
      wasFollowNum:30,
      introduce:'懒人',
      fwStatus:false
    }
  },
  {
    id:6,
    tab:"前端",
    title:'文章',
    describe:'ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
    eye:1,
    good:2,
    discuss2e:2,
    userInfo:{
      id:20,
      name:'作者',
      avatar:'@/assets/logo.png',
      followNum:1,
      wasFollowNum:30,
      introduce:'懒人',
      fwStatus:false

    }
  },{
    id:2,
    tab:"前端",
    title:'文章',
    describe:'ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
    eye:1,
    good:2,
    discuss2e:2,
    userInfo:{
      id:20,
      name:'作者',
      avatar:'@/assets/logo.png',
      followNum:1,
      wasFollowNum:30,
      introduce:'懒人',
      fwStatus:false

    }
  },
  {
    id:6,
    tab:"前端",
    title:'文章',
    describe:'ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
    eye:1,
    good:2,
    discuss2e:2,
  }])
  
const handleClick = (tab: string, event: Event) => {
  console.log(tab, event)
}
const activeName = ref(navList.value[0].name)

</script>
<style lang="scss" scoped>
.home-content{
  display: flex;
  width: 100%;
.demo-tab {
  width: 100%;
  text-align: center;
 .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.main-content{
  display: flex;
  width: 70%;
  height: 100%;
  margin: 0 auto;
  overflow-y: scroll;
  .main{
    flex: 4;
    height: 100%;
  }
  .side{
    position: static;
    flex:1.5;
    height: 100%;
    margin-left: 10px;
    background-color: blue;
  }
}
:deep(.el-tabs__nav){
  width: 100%;
}
:deep(.el-tabs__content){
  height:89%;
}
:deep(.el-tab-pane){
  height: 100%;
}
}
}
</style>