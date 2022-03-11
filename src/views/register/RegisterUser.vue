<template>
  <div class="register-content">
    <div class="register">
      <el-form
        ref="ruleFormRef"
        :model="formData"
        :rules="rules"
        label-width="100px"
        class="demo-ruleForm"
        label-position="left"
      >
        <el-form-item label="昵称" prop="name">
          <el-input v-model="formData.name" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="formData.password" type="password" />
        </el-form-item>
        <el-form-item label="确认密码" prop="confinePassword">
          <el-input v-model="formData.confinePassword" type="password" />
        </el-form-item>
        <el-form-item label="邮箱" prop="emil">
          <el-input v-model="formData.emil" type="emil" />
        </el-form-item>
        <el-form-item label="兴趣" prop="interest">
          <el-checkbox-group v-model="formData.interest">
            <el-checkbox-button v-for="(item) in interestList" :key="item" :label="item">
              {{
                item
              }}
            </el-checkbox-button>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="个性标签">
          <el-input v-model="formData.introduce" />
        </el-form-item>
        <router-link to="/login" style="color:blue;">
          已有账户？登录
        </router-link>
      </el-form>
      <span class="dialog-footer">
        <el-button @click="returnHome">返回首页</el-button>
        <el-button type="primary" @click="submitRigister"
        >确定</el-button
        >
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import {ref,reactive} from 'vue'
  import {useRouter} from 'vue-router'
  import {userInfo} from '@/stores/user'
  const userStore=userInfo()
  const route=useRouter()
  const ruleFormRef=ref<any>()
  const formData=reactive({
    name:'',
    password:'',
    confinePassword:'',
    emil:'',
    interest:[] as string[],
    introduce:''
  })
  const interestList=ref<string[]>(['前端','后端','算法','人工智能'])
  const chechPassword=(rule: any, value: any, callback: any) => {
if (value !== formData.password) {
    callback(new Error("两次密码输入一致"))
  } else {
    callback()
  }
}
  const rules=reactive({
      name: [{required:true, message:'请输入用户名', trigger: 'change' }],
      password: [{required:true, message:'请输入长度为6-18至少存在数字,字母', pattern:/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z\\W]{6,18}$/,trigger: 'change' }],
      confinePassword: [{required:true, validator: chechPassword, trigger: 'change' }],
      emil:[{message:'请输入正确邮箱',required:true,trigger:'change',pattern:/^\w+@[\da-z\.-]+\.([a-z]{2,6}|[\u2E80-\u9FFF]{2,3})$/}],
      interest:[{message:'请至少选择一项技术爱好',required:true,trigger:'change'}],
  })
  const submitRigister=()=>{
      if (!ruleFormRef.value) return
      ruleFormRef.value.validate((valid:boolean) => {
    if (valid) {
      console.log('submit!')
      userStore.login({username:formData.name,password:formData.password})
    } else {
      console.log('error submit!')
      return false
    }
  })
  }
  const returnHome=()=>{
    route.push({
      path:'/home'
    })
  }
</script>
<style lang="scss" scoped>
.register-content{
  width:100%;
  height:100%;
  background-image:url("@/assets/images/register.png");
  background-repeat:no-repeat;
  background-size:cover;
  background-position:center;
  .register{
    display:flex;
    position:absolute;
    width:500px;
    padding:30px 20px;
    left: 50%; 
    top: 50%;
    flex-direction:column;
    transform: translate(-50%, -50%);    /* 50%为自身尺寸的一半 */
    background-color:rgba(255, 255, 255, .8);
    border-radius:10px;
    box-shadow:0 0 5px gray;
    transition:all .5s ;
    &:hover{
      box-shadow:0 0 10px gray;
    }
  }
  .dialog-footer{
    display:flex;
    justify-content:space-evenly;
    margin-top:20px;
  }
}
</style>