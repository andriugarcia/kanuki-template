import App from './App.vue'
import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')

import VueWebComponent from './web-template';

const CustomElement = wrap(Vue, VueWebComponent);

window.customElements.define('kanuki-youtube', CustomElement);