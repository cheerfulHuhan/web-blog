<template>
  <div class="mange-content">
    <el-tabs
      v-model="activeName"
      type="card"
      class="demo-tabs"
      @tab-click="handleClick"
    >
      <el-tab-pane name="title">
        <template #label>
          <span class="custom-tabs-label">
            <span>文章({{ titleStatusNum.success }})</span>
          </span>
        </template>
        <TitleItem
          v-model:title-list="titleList"
          :title-type="manageTitleStatus.STATUS_SUCCESS">
          <span class="el-dropdown-link">
            更多
            <el-icon class="el-icon--right">
              <Expand />
            </el-icon>
          </span>
        </TitleItem>
      </el-tab-pane>
      <el-tab-pane name="approval">
        <template #label>
          <span class="custom-tabs-label">
            <span>审批中({{ titleStatusNum.approveIng }})</span>
          </span>
        </template>
        <TitleItem 
          v-model:title-list="titleList"
          :titleType="manageTitleStatus.STATUS_APPROVE" />
      </el-tab-pane>
      <el-tab-pane name="notApproval">
        <template #label>
          <span class="custom-tabs-label">
            <span>审批失败({{ titleStatusNum.fail }})</span>
          </span>
        </template>
        <TitleItem 
          v-model:title-list="titleList"
          :titleType="manageTitleStatus.STATUS_FAIL"
        >
          <span class="el-dropdown-link">
            更多
            <el-icon class="el-icon--right">
              <Expand />
            </el-icon>
          </span>
        </TitleItem>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue';
import TitleItem from './TitleItem/TitleItem.vue'
import {TitleItemType,manageTitleStatus} from './TitleItem/types/index'
import {Expand} from '@element-plus/icons-vue'
  const titleList=ref<TitleItemType[]>([{
    id:4,
    name:'作者',
    time:'1天',
    tabs:['前端',"node"],
    title:'文章',
    describe:'ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
    eye:1,
    good:2,
    discuss2e:2,
    switchInfo:true,
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
    name:'作者',
    time:'1天',
    tabs:['前端',"node"],
    title:'文章',
    describe:'ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
    eye:1,
    good:2,
    discuss2e:2,
    switchInfo:true,
  },{
    id:2,
    name:'作者',
    time:'1天',
    tabs:['前端',"node"],
    title:'文章',
    describe:'ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
    eye:1,
    good:2,
    discuss2e:2
  },
  {
    id:6,
    name:'作者',
    time:'1天',
    tabs:['前端',"node"],
    title:'文章',
    describe:'ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
    eye:1,
    good:2,
    discuss2e:2
  },{
    id:2,
    name:'作者',
    time:'1天',
    tabs:['前端',"node"],
    title:'文章',
    describe:'ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
    eye:1,
    good:2,
    discuss2e:2
  },
  {
    id:6,
    name:'作者',
    time:'1天',
    tabs:['前端',"node"],
    title:'文章',
    describe:'ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
    eye:1,
    good:2,
    discuss2e:2
  }])
const activeName = ref('title')

const handleClick = (tab: string, event: Event) => {
  console.log(tab, event)
}
const titleType=ref<String>('success')
const titleStatusNum=reactive({
  success:20,
  approveIng:2,
  fail:2
})
</script>
<style lang="scss" scoped>
.mange-content{
  margin:0 auto;
  width: 40%;
  .demo-tabs > .el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
  }
  .el-tabs{
    height: 100%;
    overflow-y: scroll;
  }
}
</style>