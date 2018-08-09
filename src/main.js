import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['pages/logs/main', '^pages/index/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      selectedColor: '#00FF00',
      list: [{
        pagePath: 'pages/index/main',
        text: '主页',
        iconPath: 'static/home.png',
        selectedIconPath: 'static/home_selected.png'
      }, {
        pagePath: 'pages/logs/main',
        text: '日志',
        iconPath: 'static/user.png',
        selectedIconPath: 'static/user_selected.png'
      }]
    }
  }
}
