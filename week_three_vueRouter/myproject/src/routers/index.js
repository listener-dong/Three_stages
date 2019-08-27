import home from "./pages/home.vue";
import cart from "./pages/cart.vue";
import login from "./pages/login.vue";

// 1.引入路由
import VueRouter from 'vue-router';

// 2.使用路由
Vue.use(VueRouter);

// 3.实例化router并配置参数
let router = new VueRouter({
    routes: [{
        path: "/home",
        component: home
    }, {
        path: "/cart",
        component: cart
    }, {
        path: "/login",
        component: login
    }]
});

export default router;