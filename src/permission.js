import router from './router'
import { getToken } from '@/utils/auth'
import store from './store'
import asyncRoutes from './router/asyncRoutes'


const whiteList = ['/login']

router.beforeEach((to, from, next)=>{
    const token = getToken()
    const userInfo = store.state.user.userInfo
    if(to.path === '/login') {
        if(token) {
            console.log('already login')
            next('/')
        } else {
            next()
        }
    }else {
        if(whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            if(token) {
                if(JSON.stringify(userInfo) == "{}") {
                    // userInfo request
                    store.dispatch('user/getUserInfo').then(() => {
                        //filter routes
                        router.addRoute(asyncRoutes)
                        next()
                        // router.addRoute(res.menu)
                    })
                    
                }
                else {
                    next()
                }
            } else {
                console.log('noLogin')
                next('/login')
            }
        }
    }
})