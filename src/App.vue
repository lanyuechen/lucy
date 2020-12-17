<template>
  <div id="app">
    <Entry />
    <!-- <Test /> -->
  </div>
</template>

<script>
import Entry from '@/pages/Entry';
import Test from '@/pages/Test';

export default {
  name: 'App',
  components: {
    Entry,
    Test
  }
};
</script>

<style lang="scss">
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
a {
  cursor: pointer;
}
.splitpanes {
  .splitpanes__splitter {
    background-color: #ccc;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      z-index: 1;
    }
  }
  &.splitpanes--vertical {
    &> .splitpanes__splitter::before {
      left: -3px;
      right: -3px;
      height: 100%;
    }
  }
  &.splitpanes--horizontal {
    &> .splitpanes__splitter::before {
      top: -3px;
      bottom: -3px;
      width: 100%;
    }
  }
}
.no-padding {
  padding: 0;
  min-width: 100px;
}
</style>
