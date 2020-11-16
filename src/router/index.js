import Vue from "vue";
import VueRouter from "vue-router";

// 导入路由模块
import centerRouter from '@/router/routes/center.js'
import cinemaRouter from "@/router/routes/cinema.js";
import filmRouter from "@/router/routes/film.js";

Vue.use(VueRouter);

const routes = [
    // 注册路由模块
    centerRouter,
    cinemaRouter,
    filmRouter,
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
];

const router = new VueRouter({
    mode: "history",
    // 前缀暂时可以不用使用
    // base: process.env.BASE_URL,
    routes,
});

export default router;