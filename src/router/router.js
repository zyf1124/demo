// createRouter方法用于创建路由实例对象
// createWebHashHistory方法用于指定路由的工作模式（hash模式）
import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
        path: "/",
        component: () => import("@/views/home/index.vue")
    }, {
        path: "/information",
        component: () => import("@/views/information/index.vue")
    }, {
        path: "/user",
        component: () => import("@/views/user/index.vue")
    }, {
        path: "/meter",
        component: () => import("@/views/meter/index.vue")
    }, {
        path: "/userInfo",
        component: () => import("@/views/userInfo/index.vue")
    }]
})

export default router