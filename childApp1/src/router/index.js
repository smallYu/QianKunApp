import Vue from "vue"
import vueRouter from "vue-router"
import routes from "./routers"
Vue.use(vueRouter);
console.log(window.__POWERED_BY_QIANKUN__)
export default new vueRouter({
  mode:"hash",
  routes
})