<template>
  <div
    v-for="item in titleList"
    :key="item.id"
    class="title-content" @click="viewTitle(item.id)">
    <div v-if="item?.userInfo?.id!==user.id" class="head">
      <el-popover
        placement="top-start"
        :width="300"
        trigger="hover"
      >
        <template #reference>
          <span @click.stop="viewUser(item.id,'title')">{{ item.userInfo?.name }}&nbsp;&nbsp;&nbsp;|</span>
        </template>
        <div class="user-content">
          <div class="header">
            <img class="avatar" src="@/assets/logo.png" alt="">
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
            <div style="margin-left:20px;">
              <p>粉丝</p>
              <p>0</p>
            </div>
            <el-button style="margin: 20px auto ;">
              关注
            </el-button>
          </div>
        </div>
      </el-popover>
      <span>{{ item.tab }}</span>
    </div>
    <div class="title-main">
      <div class="describe" :class="{isImage: item.img}">
        <h3>{{ item.title }}</h3>
        <p class="describe-text"
        >
          {{ item.describe }}
        </p>
        <p class="operate">
          <span><svg-icon name="eye" />   {{ item.eye }}</span><span v-if="item?.userInfo?.id!==user.id"><svg-icon name="good" />   {{ item.good }}</span><span><svg-icon name="discuss2e" />   {{ item.discuss2e }}</span>
        </p> 
      </div>
      <img v-if="item.img" class="imge" :src="item.img" alt="">
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, PropType } from 'vue';
import {TitleItemType} from "../TitleItem/types"
import {useViewTitle} from '@/hooks/useViewTitle'
import {userInfo} from '@/stores/user'
const user=userInfo()
const {viewTitle} =useViewTitle()
  const props=defineProps({
    titleList:{
      type:Array as PropType<TitleItemType[]>,
    required:true,
    default:()=>{
      return []
    }
    }
  })
  const emit=defineEmits(['getUserId'])
  const titleList=computed(()=>{
    return props.titleList
  })
  const viewUser=(id:number,theme:string)=>{
    emit('getUserId',{id,theme})
  }

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
        .svg-icon{
          font-size: 25px;
        }
        }
      }
    }
    .isImage{
      width: calc(100% - 230px);
    }
    .imge{
      width: 200px;
      height: 100%;
      background-size: cover;
      background-repeat: no-repeat;
      background-position-y: center;
      background-color: blue;
    }
  }
  .head{
    span{
      margin-right: 10px;
    }
    .el-tooltip__trigger:hover{
      cursor: pointer;
      color:blue;
    }
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