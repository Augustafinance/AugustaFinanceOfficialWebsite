import Vue from 'vue'
import VueRouter from 'vue-router'
import Business from '../views/home-pages/Business'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Business',
        component: Business,
        meta: {
            title: 'Augusta',
        },
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
    window.scrollTo(0, 0)
});

export default router
