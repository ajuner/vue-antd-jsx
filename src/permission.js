import router from './router'
import { getToken } from '@/utils/auth'
import store from './store'
import asyncRoutes from './router/asyncRoutes'


const whiteList = ['/login']

router.beforeEach(async (to, from, next)=>{
    const token = getToken()
    const userInfo = store.state.user.userInfo
    document.title = process.env.VUE_APP_TITLE + '-' + to.meta.title 
    if(to.path === '/login') {
        if(token) {
            console.log('already login')
            next('/main')
        } else {
            next()
        }
    }else {
        if(whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            if(token) {
                if(JSON.stringify(userInfo) == "{}") {
                    const res = await store.dispatch('user/getUserInfo')
                    if(res) {
                        //router4.0 remove addRoutes API, should use addRoute
                        const menuRoutes = filterRoutes(asyncRoutes, res.menu)
                        menuRoutes.forEach(item=> {
                            router.addRoute(item)
                        })
                        next('/main')
                    }
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

function filterRoutes (asRoutes, usRoutes) {
    //filter your Routes
    console.log(asRoutes, usRoutes)
    return asRoutes
}