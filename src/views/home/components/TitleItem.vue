<template>
  <div
    v-for="item in titleList"
    :key="item.id"
    class="title-content">
    <div class="head">
      <el-popover
        placement="top-start"
        :width="300"
        trigger="hover"
      >
        <template #reference>
          <span>{{ item.name }}|</span>
        </template>
        <div class="user-content">
          <div class="header">
            <img class="avatar" src="" alt="">
            <div class="userIntroduce">
              <p>name</p>
              <p>描述</p>
            </div>
          </div>
          <div class="follow">
            <div>
              <p>关注者</p>
              <p>0</p>
            </div>
            <div>
              <p>关注者</p>
              <p>0</p>
            </div>
            <div>
              <el-button type="primary">
                关注
              </el-button>
            </div>
          </div>
        </div>
      </el-popover>
      <span>{{ item.time }}|</span>
      <span v-for="tab in item.tabs " :key="tab"><a>{{ tab }}.</a></span>
    </div>
    <div class="title-main">
      <div class="describe">
        <h3>{{ item.title }}</h3>
        <p class="describe-text"
        >
          {{ item.describe }}
        </p>
        <p class="operate">
          <span><svg-icon name="eye" />   {{ item.eye }}</span><span><svg-icon name="good" />   {{ item.good }}</span><span><svg-icon name="discuss2e" />   {{ item.discuss2e }}</span>
        </p> 
      </div>
      <img v-if="item.img" class="imge" :src="item.img" alt="">
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, PropType } from 'vue';
import {TitleItemType} from "../components/types/index"
  const props=defineProps({
    titleList:{
      type:Array as PropType<TitleItemType[]>,
    required:true,
    default:()=>{
      return []
    }
    }
  })
  const titleList=computed(()=>{
    return props.titleList
  })
</script>
<style lang="scss" scoped>
.title-content{
  height: 150px;
  padding: 10px 30px;
  text-align: left ;
  overflow: hidden;
  border: 1px solid rgb(228, 231, 237);
  .user-content{
    display: flex;
    width: 100%;
    text-align: center;
    .header{
      width: 100%;
      display: flex;
      .avator{
        flex: 1;
        height: 100px;
        padding: 10px;
        border-radius: 50% 50%;
        background-color: red;
        background-position: center;
        background-repeat: no-repeat;

      }
      .userIntroduce{
        flex: 1;
      }
    }
  }
  .title-main{
    display: flex;
    height: 120px;
    .describe{
      flex: 3;
      max-width: 500px;
      .describe-text{
        overflow: hidden;
        white-space: nowrap;
        text-overflow:ellipsis;
      }
      .operate{
        height: 20px;
        span{
        display: inline-flex;
        width: 30px;
        padding: 5px;
        align-items: center;
        font-size: 14px;
        }
      }
    }
    .imge{
      flex:1;
      height: 100%;
      background-size: cover;
      background-repeat: no-repeat;
      background-position-y: center;
      background-color: blue;
    }
  }
}

</style>