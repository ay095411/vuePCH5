import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes.js'
import axios from 'axios'
import request from '../../utils/request.js'
import utils from '../../utils/utils.js'
import ElementUI  from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Router)
Vue.use(ElementUI)
Vue.prototype.$http = request
Vue.prototype.$utils = utils

const router = new Router({
	mode: process.env.NODE_ENV === 'production' ? 'history' : 'hash',
	base: '/',
	routes: routes
})
/**
 * 判断是否为移动设备，是，则跳转到移动端的路径
 */
router.beforeEach((to, from, next) => {
  if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    window.location.href = '/m.html#/'
    return
  }
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
  	document.title = to.meta.title;
  }
  next()
})
export default router
