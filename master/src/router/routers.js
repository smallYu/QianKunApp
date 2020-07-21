
let routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/index.vue')
  },
  {
    path:"/about",
    name: 'about',
    component: () => import('../pages/about.vue')
  }
]
export default routes