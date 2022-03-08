import { defineStore, acceptHMRUpdate }  from 'pinia'
export  const useMd = defineStore({
  id:'md',
  state:()=>({  
  text:''
  }),
  getters:{
    getText():any{
      return this.text
    }
  },
  actions:{ 
  setText(text:any){
    this.text=text
  }  
}
 })
 if ((import.meta  as any).hot) {
  (import.meta  as any).hot.accept(acceptHMRUpdate(useMd, (import.meta as any).hot))
}