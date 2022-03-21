<template>
  <div class="md-editor">
    <v-md-editor
      v-model="text"
      height="100%"
      @save="saveText" />
    <el-dialog
      v-model="dialogVisible"
      title="编辑文章分类"
      width="30%"
      :before-close="handleClose"
    >
      <el-form
        ref="formRef"
        :rules="rules"
        :model="formData"
        style="width:100
        %">
        <el-form-item label="标题" prop="title">
          <el-input v-model="formData.title" />
        </el-form-item>
        <el-form-item label="分类" prop="tab">
          <el-radio-group v-model="formData.tab">
            <el-radio-button label="后端" />
            <el-radio-button label="前端" />
            <el-radio-button label="算法" />
            <el-radio-button label="人工智能" />
            <el-radio-button label="Android" />
          </el-radio-group>
        </el-form-item>
        <el-form-item label="封面">
          <el-upload
            class="avatar-uploader"
            action="#"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <el-icon v-else class="avatar-uploader-icon">
              <Plus />
            </el-icon>
          </el-upload>
        </el-form-item>
        <el-form-item label="编辑摘要" prop="desc">
          <el-input v-model="formData.introduce" type="textarea" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="resetForm">取消</el-button>
          <el-button type="primary" @click="submit"
          >发布保存</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import {useMd} from '@/stores/md'
import { ElMessage } from 'element-plus';
import { Plus } from '@element-plus/icons-vue'
import {submitTitle} from './api'
import type {
  UploadFile,
  UploadRawFile,
  UploadProgressEvent,
} from 'element-plus'
//文件上传
const imageUrl = ref('')
const handleAvatarSuccess = (res: UploadProgressEvent, file: UploadFile) => {
  imageUrl.value = URL.createObjectURL(file.raw!)
  //formData.value=URL.createObjectURL(file.raw!)
}
const beforeAvatarUpload = (file: UploadRawFile) => {
  const isJPG = file.type === 'image/jpeg'
  const isLt2M = file.size / 1024 / 1024 < 2

  if (!isJPG) {
    ElMessage.error('Avatar picture must be JPG format!')
  }
  if (!isLt2M) {
    ElMessage.error('Avatar picture size can not exceed 2MB!')
  }
  return isJPG && isLt2M
}
//文档编辑
    const md=useMd()
    const text=ref<any>()
    const saveText=()=>{
      dialogVisible.value=true
      console.log(text.value)
      md.setText(text.value)
      formData.main=text.value
      ElMessage.success("保存成功")
    }
    const handleClose=()=>{
      console.log(`dialogVisible.value=false`)
    }
//表单编辑
    const formData=reactive<any>({
      title:'',
      tab:'',
      img:'',
      describe:'',
      main:''
    })
    const formRef=ref<HTMLFormElement>()
    const dialogVisible=ref<boolean>(false)
    const rules=reactive({
      title:[{required:true,message:'请输入文章标题',trigger:'blur'}],
      tab:[{required:true,message:'请选择文章专题'}],
      img:[{required:false}],
      describe:[{required:true,message:'请输入文章摘要',trigger:'blur'}]
    })
    //重置表单
    const resetForm=()=>{
      formRef.value!.resetFields()
      dialogVisible.value=false
    }
    //提交文章
    const submit=()=>{
      submitTitle(formData.value)
    }
</script>
<style lang="scss" setup>
  .md-editor{
    width: 100%;
    height: 100%;
  }
  .avatar-uploader{
    display: flex;
    width: 100px;
    height: 100px;
    justify-content: center;
    align-items:center;
    text-align: center;
    background-color: rgb(204, 219, 231);
  }
  .dialog-footer{
    display: flex;
    width: 100%;
    justify-content:space-evenly;
  }
</style>