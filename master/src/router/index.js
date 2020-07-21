import Vue from "vue"
import vueRouter from "vue-router"
import routes from "./routers"
Vue.use(vueRouter)
export default new vueRouter({
  mode:'history',
  // base:process.env.NODE_ENV == 'production'?'/qiankun/':'',
  base:'/',
  routes
})