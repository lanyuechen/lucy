// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Element from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css'; // script导入

import VueRouter from 'vue-router';

// import ace from 'ace-builds';

import { Splitpanes, Pane } from 'splitpanes';
import 'splitpanes/dist/splitpanes.css';

import Viewer from '@/components/Viewer';
// import Ace from '@/components/Ace';

import routes from './routes';

// Vue.use(ace);
Vue.use(VueRouter);

// Vue.component('ace', Ace);
Vue.component('splitpanes', Splitpanes);
Vue.component('pane', Pane);
Vue.component('viewer', Viewer);

Vue.config.productionTip = false;

Vue.use(Element, {
  size: 'mini', // set element-ui default size
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  router: new VueRouter({routes}),
  template: '<App/>'
});
