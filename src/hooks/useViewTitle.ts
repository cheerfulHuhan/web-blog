import  {useRouter} from 'vue-router'
export function useViewTitle(){
  const router=useRouter()
  const viewTitle=(id:number)=>{
    router.push({
      name:'ViewMd',
      params:{
        id
      }
    })
  }
  return {
    viewTitle
  }
}