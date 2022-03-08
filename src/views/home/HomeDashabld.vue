<template>
  <div class="home-content">
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane 
        v-for="item in navList" 
        :key="item.name" 
        :label="item.label" 
        :name="item.name">
        <div class="main-content">
          <div class="main">
            主页
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
import Layout from '@/layout/index.vue'
import { ref } from 'vue';
interface tabItemType{
  label:string
  name:string|number
}
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
const handleClick = (tab: string, event: Event) => {
  console.log(tab, event)
}
const activeName = ref(navList.value[0].name)
</script>
<style lang="scss" scoped>
.home-content{
  width: 100%;
.demo-tabs {
  width: 100%;
  height: 100%;
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
    background-color: red;
  }
  .side{
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