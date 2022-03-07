import { defineStore, acceptHMRUpdate } from 'pinia'
import userType from './types/user'
import {accountLogin,userInfoRequest} from './api/index'
import { getToken, removeToken, setToken } from '@/utils/cookies'
export const userInfo = defineStore({
  id: 'todo',
  state: () => ({ 
    token:getToken() ||'',
    avatar:'',
    name:'',
    roles:[]
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
  loginOut(){
    this.$patch({
      name:'',
      roles:[],
      avatar:'',
      token:''
    })
  },
  login( userInfo: { username: string, password: string }) {
    let { username} = userInfo
    const {password }=userInfo
     username = username.trim()
     setToken("4687978798")
     this.setToken('4687978798')
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
