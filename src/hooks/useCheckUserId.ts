import {userInfo} from '@/stores/user'
import { ref } from 'vue'

export function useCheckId(){
  const user=userInfo()
  const checkResult=ref<boolean>(false)
  const checkId=(id:number)=>{
    checkResult.value=user.id===id
 }
 return {checkId,checkResult}
}