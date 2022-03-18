<template>
  <div class="editUserInfo-content">
    <div class="edit-content">
      <h3>个人资料</h3>
      <el-divider />
      <el-form
        ref="editForm"
        :model="formData"
        class="edit-form"
        :rules="rules"
        size="large"
        label-width="80px"
        label-postion="right"
      >
        <el-divider />
        <el-form-item prop="name" label="昵称">
          <el-input v-model="formData.name" />
        </el-form-item>
        <el-divider />
        <el-form-item prop="emil" label="邮箱">
          <el-input v-model="formData.emil" />
        </el-form-item> 
        <el-divider />
        <el-form-item label="兴趣" prop="interest">
          <el-checkbox-group v-model="formData.interest">
            <el-checkbox-button v-for="(item) in interestList" :key="item" :label="item">
              {{
                item
              }}
            </el-checkbox-button>
          </el-checkbox-group>
        </el-form-item>
        <el-divider />
        <el-form-item prop="introduce" label="个性标签">
          <el-input v-model="formData.introduce" />
        </el-form-item>
        <el-divider />
        <el-button @click="submit">
          保存修改
        </el-button>
      </el-form>
    </div>
    <div class="avatar-content">
      <img :src="useInfo.avatar" class="avatar">
      <el-button>修改头像</el-button>
      <!-- <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <el-icon v-else class="avatar-uploader-icon">
          <Plus />
        </el-icon>
      </el-upload> -->
    </div>
  </div>
</template> 
<script lang="ts" setup>
import { ElMessage } from 'element-plus';
import { reactive, ref } from 'vue';
import {userInfo} from '@/stores/user'
// import { UploadFile,UploadRawFile } from 'element-plus/es/components/upload/src/upload.type';
// import { Plus } from '@element-plus/icons-vue'
// import type {
//   UploadProgressEvent,
// } from 'element-plus'

// const imageUrl = ref('')
// const handleAvatarSuccess = (res: UploadProgressEvent, file: UploadFile) => {
//   imageUrl.value = URL.createObjectURL(file.raw!)
// }
// const beforeAvatarUpload = (file: UploadRawFile) => {
//   const isJPG = file.type === 'image/jpeg'
//   const isLt2M = file.size / 1024 / 1024 < 2

//   if (!isJPG) {
//     ElMessage.error('Avatar picture must be JPG format!')
//   }
//   if (!isLt2M) {
//     ElMessage.error('Avatar picture size can not exceed 2MB!')
//   }
//   return isJPG && isLt2M
// }
    const useInfo=userInfo()
    const editForm=ref<HTMLFormElement>() as any
    const formData=reactive({
        name:'',
        emil:'',
        interest:[],
        introduce:'',
    })
    const rules=reactive({
      name: [{required:true, message:'请输入用户名', trigger: 'change' }],
      password: [{required:true, message:'请输入长度为6-18至少存在数字,字母', pattern:/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z\\W]{6,18}$/,trigger: 'change' }],
      emil:[{message:'请输入正确邮箱',required:true,trigger:'change',pattern:/^\w+@[\da-z\.-]+\.([a-z]{2,6}|[\u2E80-\u9FFF]{2,3})$/}],
      interest:[{message:'请至少选择一项技术爱好',required:true,trigger:'change'}],
    })
    const interestList=ref<string[]>(["前端","后端","算法","人工智能"])
    const submit=()=>{
      editForm.value.validate((valid:boolean)=>{
        if(valid){
          ElMessage.success('保存成功')
        }
      })
    }
    
</script>
<style lang="scss" scoped>
.editUserInfo-content{
  display: flex;
  width: 50%;
  padding: 20px;
  margin: 20px auto;
     box-shadow:0 0 5px gray;
  .edit-content{
    flex:3.5;
    margin-right: 30px;
    .edit-form{
      width: 70%;
      margin: 0 auto;
    }
  }
  .avatar-content{
    flex:1;
  }
}
</style>