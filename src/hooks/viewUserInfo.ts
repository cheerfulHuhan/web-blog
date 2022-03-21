interface dataType{
  id:number
  theme:string
}
import {useRouter} from 'vue-router'
export function viewUserInfo(){
  const router=useRouter()
  const transportId=(data:dataType)=>{
    router.push({
      name:'Person',
      params:{
        id:data.id,
        theme:data.theme
      }
    })
  }
  return{
    transportId,
  }
}