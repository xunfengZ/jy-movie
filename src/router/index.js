import Vue from "vue";
import VueRouter from "vue-router";

// 导入路由模块
import centerRouter from '@/router/routes/center.js'
import cinemaRouter from "@/router/routes/cinema.js";
import filmRouter from "@/router/routes/film.js";
import detailRouter from '@/router/routes/detail.js'

Vue.use(VueRouter);

const routes = [
    // 注册路由模块
    centerRouter,
    cinemaRouter,
    filmRouter,
    detailRouter,
    {
        path: "/",
        redirect: "/film",
       
        
    },
//     {
//       path: "/cinema",
//       component:()=>import('../views/Cinema/Cinema.vue')
      
//   },
//   {
//     path: "/center",
//     component:()=>import('../views/Center/Center.vue')
    
// },
{
    path:'/test',
    componnet:()=>import('../test/testTick.vue')
}
];

const router = new VueRouter({
    mode: "history",
    // 前缀暂时可以不用使用
    // base: process.env.BASE_URL,
    routes,
});

export default router;