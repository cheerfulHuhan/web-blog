<template>
  <div class="person-content">
    <PersonInfo
      v-if="user.id!==titleList[0].userInfo?.id"
      :userInfo="titleList[0].userInfo" 
      @change-fw-status="changeFwStatus" />
    <el-tabs
      v-model="activeName"
      type="card"
      class="demo-tab"
      @tab-click="handleClick"
    >
      <el-tab-pane label="文章" name="title">
        <TitleItem v-model:titleList="titleList" />
      </el-tab-pane>
      <el-tab-pane label="收藏" name="collect">
        <TitleItem v-model:titleList="titleList" />
      </el-tab-pane>
      <el-tab-pane name="follow">
        <template #label>
          <span class="custom-tab-label">
            <span>关注了</span><span>&nbsp;&nbsp;(2)</span>
          </span>
        </template>
        <UserInfoItem :userInfoList="userInfoList" />
      </el-tab-pane>
      <el-tab-pane name="wasFollow">
        <template #label>
          <span class="custom-tab-label">
            <span>粉丝</span><span>&nbsp;&nbsp;(2)</span>
          </span>
        </template>
        <UserInfoItem :userInfoList="userInfoList" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script lang="ts" setup>
import TitleItem from '../../components/TitleItem/TitleItem.vue';
import PersonInfo  from '@/components/personInfo/index.vue'
import { onMounted, ref } from 'vue'
import {useRoute} from 'vue-router'
import UserInfoItem from './components/UserInfoItem.vue'
import {TitleItemType,userInfoType} from '../../components/TitleItem/types';
import { userInfo } from '@/stores/user';
const user=userInfo()
const activeName = ref<string|string[]>('title')
const route=useRoute()
  const titleList=ref<TitleItemType[]>([{
    id:4,
    tab:'前端',
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
    id:1,
    tab:'前端',
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
    tab:'前端',
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
    tab:'前端',
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
    tab:'前端',
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
    tab:'前端',
    title:'文章',
    describe:'ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
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
  }])
const userInfoList=ref<userInfoType[]>([
  {id:5,name:'hahah',avatar:'@/assets/logo.png',introduce:'sssssss',fwStatus:true},
  {id:6,name:'hahah',avatar:'@/assets/logo.png',introduce:'sssssss',fwStatus:true}
])

const handleClick = (tab: any) => {
  activeName.value=tab.props.name
}
const changeFwStatus=(userInfo:userInfoType)=>{
  console.log(userInfo);
  
  titleList.value[0].userInfo=userInfo
}
onMounted(()=>{
  if(route.params.theme){
    activeName.value=route.params.theme
  }
})
</script>
<style lang="scss" scoped>
.person-content{
  display:flex;
  flex-direction:column;
  height:100%;
  width:50%;
  margin:0 auto;
  overflow-y: scroll;
  .el-tabs{
    flex:1;
  }
.demo-tab > .el-tabs__content {
  padding: 32px;
  width:100%;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
}

</style>