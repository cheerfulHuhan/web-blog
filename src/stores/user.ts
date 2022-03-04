import { defineStore, acceptHMRUpdate } from 'pinia'
import userType from './types/user'
export const userInfo = defineStore({
  id: 'todo',
  state: () => ({ 
    token:'',
    avatar:'',
    name:'',
    roles:[]
 } as userType)
})
if ((import.meta  as any).hot) {
  (import.meta  as any).hot.accept(acceptHMRUpdate(userInfo, (import.meta as any).hot))
}
