import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element'
import 'element-ui/lib/theme-chalk/index.css'
import ECharts from 'echarts'
import VueECharts from 'vue-echarts'
import './plugins/vcharts'

import '@/assets/scss/index.scss'

Vue.config.productionTip = false
Vue.prototype.$echarts = ECharts

Vue.component('v-chart', VueECharts)

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
