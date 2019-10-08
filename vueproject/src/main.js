import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import BottomNav from './components/BottomNav'
import Lunbo from './components/Lunbo'
import './css/myicon/iconfont.css'
Vue.prototype.axios=axios
Vue.config.productionTip = false
axios.defaults.baseURL='http://localhost:8520'

Vue.component("bottom-nav",BottomNav)
Vue.component("lunbo",Lunbo)


Vue.use(ElementUI)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {    
  // chrome
  document.body.scrollTop = 0
  // firefox
  document.documentElement.scrollTop = 0
  // safari
  window.pageYOffset = 0
  next()
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
