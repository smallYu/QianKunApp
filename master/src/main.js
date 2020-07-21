import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import action from "./share/action"
Vue.use(ElementUI);

import { registerMicroApps, start, setDefaultMountApp,MicroAppStateActions, initGlobalState  } from 'qiankun';


Vue.config.productionTip = false;

// import "amfe-flexible";
//引入并自动注册全局组件
require('@/components');
/**
 * 处理iOS 微信客户端高于6.7.4  键盘收起页面未下移bug 
 */
(/iphone|ipod|ipad/i.test(navigator.appVersion)) && document.addEventListener('blur', (e) => {
  // 这里加了个类型判断，因为a等元素也会触发blur事件
  ['input', 'textarea'].includes(e.target.localName) && document.body.scrollIntoView(false)
}, true);

const getActiveRule = (link) => {
  return location => location.pathname.startsWith(link);
}

Vue.prototype.$action = action;
/**
 * name: 微应用名称 - 具有唯一性
 * entry: 微应用入口 - 通过该地址加载微应用
 * container: 微应用挂载节点 - 微应用加载完成后将挂载在该节点上
 * activeRule: 微应用触发的路由规则 - 触发路由规则后将加载该微应用
 */
registerMicroApps([
  {
    name: 'VueApp1', // app name registered
    entry: process.env.NODE_ENV == 'production' ? `https://${location.host}/VueA/`: '//localhost:9002',
    // entry:'https://www.melonweb.cn/qiankun/VueA/',
    container: '#subapp-container', //
    activeRule: getActiveRule('/vueApp1'),
    props: {
      name: '我是主应用，现在我要和子应用VueApp1通信',
    }
  },
  {
    name: 'VueApp2',
    entry: process.env.NODE_ENV == 'production' ?`https://${location.host}/VueB/`: "//localhost:9001",
    container: '#subapp-container',
    activeRule: getActiveRule('/vueApp2'),
    props: {
      name: '我是主应用，现在我要和子应用VueApp2通信',
    }
  }
], {
  beforeLoad: [
    app => {
      console.log(app)
      console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
    },
  ],
  beforeMount: [
    app => {
      console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
    },
  ],
  afterUnmount: [
    app => {
      console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
    },
  ],
});
//启动微应用 具体参数详见https://qiankun.umijs.org/zh/api#startopts
start();
//设置默认启动的微应用 
// setDefaultMountApp('/qiankun/vueApp2');
new Vue({
  router,
  render: h => h(App),
}).$mount('#main-app');

