import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const Layout = () => import('@/layout/index.vue')
const routes: Array<RouteRecordRaw> = [
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
      component: ()=>import(/* webpackChunkName: "Layout" */"@/views/home/HomeDashabld.vue" ),
    }]
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
