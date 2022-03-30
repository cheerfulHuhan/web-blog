import { request } from '@/utils/service'

interface IUserRequestData {
  username: string
  password: string
}

/** 登录，返回 token */
export function accountLogin(data: IUserRequestData) {
  return request({
    url: 'users/login',
    method: 'post',
    data
  })
}
//获取验证码
export function getCode(){
  return request({
    url:'/api/v1/captcha',
    method:'get',
  })
}