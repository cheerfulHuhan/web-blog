import { userInfo } from '@/stores/user'

/** 全局权限判断函数，和指令 v-permission 功能类似 */
export const checkPermission = (value: string[]): boolean => {
  const user=userInfo()
  if (value && value instanceof Array && value.length > 0) {
    const roles = user.roles
    const permissionRoles = value
    return roles.some((role:string) => {
      return permissionRoles.includes(role)
    })
  } else {
    console.error('need roles! Like v-permission="[\'admin\',\'editor\']"')
    return false
  }
}
