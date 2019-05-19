import Vue from 'vue'
import App from './app.vue'
// import './asset/react.png'
import Axios from 'axios';

Axios.defaults.baseURL = 'http://127.0.0.1:3000';
Vue.prototype.axios = Axios;

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
  render: (h) => h(App)
}).$mount(root)