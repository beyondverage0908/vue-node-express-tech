import Vue from 'vue'
import App from './app.vue'
// import './asset/react.png'
import Axios from 'axios';

// Axios.defaults.baseURL = 'http://localhost:3000/test';
// Axios.defaults.baseURL = 'http://a.com:9000/test';
Axios.defaults.baseURL = '/apis';
Vue.prototype.axios = Axios;

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
  render: (h) => h(App)
}).$mount(root)