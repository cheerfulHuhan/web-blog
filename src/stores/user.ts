import { defineStore, acceptHMRUpdate } from 'pinia'
import userType from './types/user'
import {accountLogin,userInfoRequest} from './api/index'
import { getToken, removeToken, setToken } from '@/utils/cookies'
export const userInfo = defineStore({
  id: 'todo',
  state: () => ({ 
    id:2,     
    token:getToken() ||'',
    avatar:require('@/assets/logo.png'),//头像
    name:'石志康小jb',
    roles:[], //不管这是什么返回给我 ['admin']
    introduce:'',    //个性签名
    interest:[],   //兴趣
    emil:''    //邮箱
 } as userType
 ),
 actions:{
       /**
     * Add item to the cart
     * @param {string} token
     */
  setToken(token:string){
    this.$patch({
      token:token
    })
  },
  setName(name:string){
    this.$patch({
     name:name
    })
  },
  setAvatar(avatar:string){
    this.$patch({
      avatar:avatar
    })
  },
  setRoles(roles:Array<string>){
    this.$patch({
      roles:roles
    })
  },
  setIntroduce(introduce:string){
    this.$patch({
      introduce:introduce
    })
  },
  setInterest(interest:string[]){
      this.$patch({
        interest:interest
      })
    },
  setEmil(emil:string){
    this.$patch({
      emil:emil
    })
  },
  setId(id:string){
    this.$patch({
      id:id
    })
  },
  setUserInfo(userInfo:{id:number,token:string,avatar:string,name:string,roles:string[],introduce:string,interest:string[],emil:string}){
    this.$patch({
      id:userInfo.id,
      token:userInfo.token,
      avatar:require(userInfo.avatar),
      name:userInfo.name,
      roles:userInfo.roles,
      interest:userInfo.interest,
      emil:userInfo.emil,
      introduce:userInfo.introduce
    })
  }
  ,loginOut(){
    this.$patch({
      id:'',
      name:'',
      roles:[],
      avatar:'',
      token:'',
      introduce:'',
      interest:[],
      emil:'',
    })
  },
  async login( userInfo: { username: string, password: string ,rememberMe:boolean,captcha:string}) {
    const data=await accountLogin(userInfo) as any
     this.setUserInfo(data)
     this.setToken(data.token)
  //  return new Promise((resolve, reject) => {
    //   accountLogin({ username, password })
       //  .then((res: any) => {
      //   setToken(res.data.accessToken)
       //    this.setToken(res.data.accessToken)
       //    resolve(true)
       //  })
       //  .catch((error) => {
       //    reject(error)
       //  })
   // })

  },
  /** 获取用户详情 */
 async getInfo() {
    return new Promise((resolve, reject) => {
      userInfoRequest()
        .then((res: any) => {
          this.setName( res.data.user.name)
          this.setAvatar( res.data.user.avatar)
          this.setRoles( res.data.user.roles)
          this.setEmil(res.data.user.emil)
          this.setInterest(res.data.user.interest)
          this.setIntroduce(res.data.introduce)
          this.setId(res.data.user.id)
          resolve(res)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
    /** 重置 token */
    resetToken() {
      removeToken()
      this.setToken('')
      this.setRoles([])
    }
}
})

if ((import.meta  as any).hot) {
  (import.meta  as any).hot.accept(acceptHMRUpdate(userInfo, (import.meta as any).hot))
}
