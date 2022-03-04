import { defineStore } from 'pinia'
import userType from './types/user'
export const useTodoStore = defineStore({
  id: 'todo',
  state: () => ({ 
    token:'',
    name:'',
    id:0,
    handImage:''  
 } as userType)
})