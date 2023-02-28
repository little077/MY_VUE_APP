import {createRouter ,createWebHashHistory} from "vue-router";
import type {RouteRecordRaw} from "vue-router";
import mapRoutesToActive from "@/Utils/mapRoutertoActive";
import { useUtilsStore } from '@/Store/utils';

const routes:RouteRecordRaw[]= [{
  name:"/",
  path:"/",
  redirect:"/main",
  children:[
   {
    path:"/main",
    name:"main",
    component:()=>import("@/Page/Main/index.vue")
   },
   {
    path:"/kings",
    name:"kings",
    redirect:"/king/changename",
    component:()=>import("@/Page/Kings/index.vue"),
    children:[
      {
        name:"changeName",
        path:"/king/changename",
        component:()=>import("@/Page/Kings/cnps/ChangeName.vue")
      },
      {
        name:"changePlace",
        path:"/king/changeplace",
        component:()=>import("@/Page/Kings/cnps/ChangePlace.vue")
      }
    ]
   },
   {
    path:"/movies",
    name:"movies",
    component:()=>import("@/Page/Movies/index.vue"),
   },
   {
    path:"/learn",
    name:"learn",
    component:()=>import("@/Page/Learn/index.vue")
   },
   {
     path:"/baidu",
     name:"baidu",
     component:()=>import("@/Page/Pang/index.vue")
   },
   {
    path:"/means",
    name:"means",
    component:()=>import("@/Page/Means/index.vue")
   },
   {
    path:"/utils",
    name:"utils",
    component:()=>import("@/Page/Utils/index.vue")
   }
  ]
  
}]
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history:createWebHashHistory(),
    routes, // `routes: routes` 的缩写
  })

router.beforeEach((to,form)=>{
  const UtilsStore = useUtilsStore();
  if(typeof mapRoutesToActive[to.path as keyof typeof mapRoutesToActive] ==="number" ){
    UtilsStore.changeActiveUtils(mapRoutesToActive[to.path as keyof typeof mapRoutesToActive])
  }
})
export default router