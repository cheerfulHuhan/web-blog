export interface userInfoType{
  id:number
  name:string
  avatar:string
  introduce?:string
  tab?:string[]
  followNum?:number
  wasFollowNum?:number
  fwStatus?:boolean

}
export interface TitleItemType{
  id:number
  name:string
  time?:string
  tab?:string
  title:string
  describe:string
  img?:string
  eye:number
  good:number
  discuss2e:number
  userInfo?:userInfoType
  switchInfo?:boolean
}