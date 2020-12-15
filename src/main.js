// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Viewer from '@/components/FormFoundry/Viewer';
import FormItem from '@/components/FormItem';

Vue.component('viewer', Viewer);
Vue.component('form-item', FormItem);

Vue.config.productionTip = false;

Vue.use(Element, {
  size: 'mini', // set element-ui default size
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
});
