import Vue from 'vue'
import App from './app.vue'
import './asset/react.png'

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
  render: (h) => h(App)
}).$mount(root)