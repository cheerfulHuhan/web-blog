import { RouteRecordRaw } from 'vue-router'
import { routes } from '@/router'
import { defineStore, acceptHMRUpdate }  from 'pinia'
export interface IPermissionState {
  routes: RouteRecordRaw[]
  dynamicRoutes: RouteRecordRaw[]
}

const hasPermission = (roles: string[], route: RouteRecordRaw):any => {
  if (route.meta && route.meta.roles) {
    return roles.some((role) => {
      if (route.meta?.roles !== undefined) {
        const roles=route.meta.roles as Array<string>
        return roles.includes(role)
      } else {
        return false
      }
    })
  } else {
    return true
  }
}

const filterAsyncRoutes = (routes: RouteRecordRaw[], roles: string[]) => {
  const res: RouteRecordRaw[] = []
  routes.forEach((route) => {
    const r = { ...route }
    if (hasPermission(roles, r)) {
      if (r.children) {
        r.children = filterAsyncRoutes(r.children, roles)
      }
      res.push(r)
    }
  })
  return res
}

 export  const permission = defineStore({
  id:'permission',
  state:()=>({  
    routes: [],
    dynamicRoutes: []
  } as IPermissionState),
actions:{ 
   setRoutes(roles:string[]) {
  let accessedRoutes
  if (roles.includes('admin')) {
    accessedRoutes = routes
  } else {
    accessedRoutes = filterAsyncRoutes(routes, roles)
  }
  this.routes = routes.concat(accessedRoutes)
  this.dynamicRoutes = accessedRoutes
}}
 })
 if ((import.meta  as any).hot) {
  (import.meta  as any).hot.accept(acceptHMRUpdate(permission, (import.meta as any).hot))
}
