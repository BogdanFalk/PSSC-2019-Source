import Vue from 'vue'
import Router from 'vue-router'
import Error404 from './views/Error404.vue'
import Home from './views/Home.vue'

// import axios from "axios"

Vue.use(Router)
/* eslint-disable */
export const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/*',
            name: '404',
            component: Error404
        }
    ]

})
router.beforeEach((to, from, next) => {

  
    next();
   
}
)