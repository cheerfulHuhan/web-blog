import { defineStore, acceptHMRUpdate } from 'pinia'
import userType from './types/user'
import {accountLogin,userInfoRequest} from './api/index'
import { getToken, removeToken, setToken } from '@/utils/cookies'
export const userInfo = defineStore({
  id: 'todo',
  state: () => ({ 
    id:'45',
    token:getToken() ||'',
    avatar:require('@/assets/logo.png'),
    name:'石志康小jb',
    roles:[],
    introduce:'',
    interest:[],
    emil:''
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
  },loginOut(){
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
