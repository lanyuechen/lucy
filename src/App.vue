<template>
  <div id="app">
    <FormFoundry />
  </div>
</template>

<script>
import FormFoundry from './components/FormFoundry';

export default {
  name: 'App',
  components: {
    FormFoundry
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  height: 100%;
  font-family: sans-serif;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -ms-overflow-style: scrollbar;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
body {
  height: 100%;
  margin: 0;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  font-variant: tabular-nums;
  line-height: 1.5;
  background-color: #fff;
  -webkit-font-feature-settings: 'tnum';
  font-feature-settings: 'tnum';
}
#app {
  height: 100%;
}
h1, h2, h3, h4, h5, h6 {
  margin-top: 0;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
}
</style>
