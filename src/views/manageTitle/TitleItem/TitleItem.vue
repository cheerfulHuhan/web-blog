<template>
  <div
    v-for="item in titleList"
    :key="item.id"
    class="title-content">
    <el-dropdown style="float: right;">
      <slot />

      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>
            <el-icon class="el-icon--right">
              <Edit />
            </el-icon>
            编辑
          </el-dropdown-item>
          <el-dropdown-item>
            <el-icon class="el-icon--right">
              <Delete />
            </el-icon>
            删除
          </el-dropdown-item>
          <el-dropdown-item
            v-if="titleType===manageTitleStatus.STATUS_FAIL">
            <el-icon class="el-icon--right">
              <Upload />
            </el-icon>
            重新提交
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <div class="title-main">
      <div class="describe">
        <h3>{{ item.title }}</h3>
        <p class="describe-text"
        >
          {{ item.describe }}
        </p>
        <p v-if="titleType===manageTitleStatus.STATUS_SUCCESS" class="operate">
          <span><svg-icon name="eye" />   {{ item.eye }}</span><span><svg-icon name="good" />   {{ item.good }}</span><span><svg-icon name="discuss2e" />   {{ item.discuss2e }}</span>
        </p> 
      </div>
      <img v-if="item.img" class="imge" :src="item.img" alt="">
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, PropType } from 'vue';
import {TitleItemType,manageTitleStatus} from "../TitleItem/types"
import {Delete,Edit,Upload} from '@element-plus/icons-vue'
  const props=defineProps({
    titleList:{
      type:Array as PropType<TitleItemType[]>,
      required:true,
      default:()=>{
      return []
    }
    },
    titleType:{
      type:Number,
      required:false,
      default:manageTitleStatus.STATUS_SUCCESS
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
  .title-main{
    display: flex;
    height: 120px;
    width:100%;
    .describe{
      flex: 3;
      max-width: 100%;
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
    .example-showcase .el-dropdown-link {
      cursor: pointer;
      color: var(--el-color-primary);
      display: flex;
      align-items: center;
    }
}
  .user-content{
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;
    .header{
      width: 100%;
      display: flex;
      .avatar{
        height: 50px;
        width: 50px;
        padding: 10px;
        margin-top: 15px;
        border-radius: 50% 50%;
        background-color: red;
        background-position: center;
        background-repeat: no-repeat;

      }
      .userIntroduce{
        flex: 1;
      }
    }
    .follow{
      display: flex;
      justify-content: space-around;
    }
  }
</style>