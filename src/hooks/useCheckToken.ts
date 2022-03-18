import { getToken } from "@/utils/cookies";
import { useRouter } from "vue-router";
export function useCheckToken() {
  const router=useRouter()
  const checkToken=()=>{
    if(!getToken()){
      router.push({
        path:'/login'
      })
    }
  }
  return {checkToken}
}