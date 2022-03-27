<template>
  <div class="person">
    <img class="avatar" src="" alt="">
    <div class="describe">
      <h1>{{ props.userInfo.name }}</h1>
      <p class="describe-text"> 
        {{ props.userInfo.introduce }}
      </p>
    </div>
    <el-button
      v-if="props.userInfo.fwStatus===true" type="success"
      class="person-button"
      size="large"
      @click="changeFwStatus">
      已关注
    </el-button>
    <el-button
      v-else-if="props.userInfo.fwStatus===false" 
      class="person-button"
      size="large"
      @click="changeFwStatus">
      关注
    </el-button>
    <el-button
      v-else
      size="large">
      编辑个人资料
    </el-button>
  </div>
</template>

<script lang="ts" setup>import
 { computed,
PropType } from 'vue';
import { userInfoType } from '../TitleItem/types';

  const props=defineProps({
    userInfo:{
      type:Object as PropType<userInfoType>,
      required:true,
      default:()=>{
        return {}
      }
      }
  })
  const userInfo=computed(()=>{
    return props.userInfo
  })
  const emit=defineEmits(['changeFwStatus'])
  const changeFwStatus=()=>{
    userInfo.value.fwStatus=!userInfo.value.fwStatus
    emit('changeFwStatus',userInfo.value)
  }
</script>

<style lang="scss" scoped>
  .person{
    display: flex;
    width: 100%;
    border-bottom: 1px solid #e4e7ed;
    .avatar{
      height: 100px;
      width: 100px;
      border-radius: 50%;
      background-position: center;
      background-size: cover;
    }
    .describe{
      flex: 1;
      text-align: left;
      text-indent: 2em;
      .describe-text{
        overflow: hidden;
        white-space: nowrap;
        text-overflow:ellipsis;
      }
    }
    .person-button{
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      margin-right:50px ;
    }
  }
</style>