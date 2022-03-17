import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const Layout = () => import('@/layout/index.vue')
export const routes: Array<RouteRecordRaw> = [  {
  path: '/login',
  component: () => import(/* webpackChunkName: "login" */ '@/views/login/WebLogin.vue')
},
  {
    path: "/",
    name: "Layout",
    component:Layout,
    redirect:'/Home',
    children:[  {
      path: "/about",
      name: "About",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/about/AboutView.vue"),
    },{
      path:'/home',
      name:"Home",
      component: ()=>import(/* webpackChunkName: "home" */"@/views/home/HomeDashabld.vue" ),
    },{
      path:'/addTitle',
      name:'AddTitle',
      component:()=>import(/*webpachChunkName:'addTitle' */"@/views/edit/AddTitle.vue")
    },{
      path:'/viewMd',
      name:'ViewMd',
      component:()=>import(/*webpachChunkName:'viewMd' */"@/views/edit/ReviewMd.vue")
    },{
      path:'/person/:theme',
      name:'Person',
      component:()=>import(/*webpachChunkName:'person' */"@/views/person/PersonHome.vue")
    },{
      path:'/editUserInfo',
      name:'EditUserInfo',
      component:()=>import(/*webpachChunkName:'editUserInfo' */"@/views/person/EditUserInfo.vue")
    }]
  },{
    path:'/register',
    name:'Register',
    component:()=>import(/**webpachChunkName:'register' */ "@/views/register/RegisterUser.vue")
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
