

export interface userInfoType{
  id:number
  name:string
  avatar:string
  introduce?:string
  interest?:string[]  //兴趣爱好  前端，后端，人工智能多个
  followNum?:number  //关注数量
  wasFollowNum?:number  //被关注数量
 // fwStatus?:boolean   //是否被关注   我会根据一个人的关注列表id来动态添加这个字段

}
export interface TitleItemType{
  id:number
  tab?:string //属于前端还是后端还是。。。
  title:string  //文章标题
  describe:string //文章藐视
  img?:string //封面
  eye:number //查看次数
  good:number //收藏次数
  discuss2e:number  //评论数
  userInfo?:userInfoType //用户信息
}
export enum manageTitleStatus{
  STATUS_SUCCESS=1, //成功发布的文章
  STATUS_APPROVE=2, //正在审批的文章
  STATUS_FAIL=0 //审批失败的文章
}

export interface issueItem{
  myUserInfo:userInfoType //我的信息
  myName:string 
  yourInfo:userInfoType //你的信息
  yourName:string
  titleId:number //文章id
  issue:string //评论id
  content:string //评论内容
  answerId:number //回复id
  answerContent:string //回复内容
}
export interface issue{
child:issueItem[]
content:string
userInfo:userInfoType //用户信息
answerNum:number 
}
