<template>
  <el-dialog
    width="75%"
    title="帮助"
    :visible="visible"
    :before-close="() => $emit('update:visible', false)"
  >
    <ol>
      <li>下载库文件<a href="static/lucy.js" download="lucy.js">lucy.js</a></li>
      <li>
        在项目中引用lucy.js(依赖vue和element-ui)
        <code><pre>{{importCode}}</pre></code>
      </li>
      <li>
        复制生成的json数据，作为data-source属性传递给lucy组件
        <code><pre>{{viewerCode}}</pre></code>
      </li>
      <li>详细请参考<a href="/lucy/test" target="_blank">使用实例</a></li>
    </ol>
    <span slot="footer">
      <el-button @click="$emit('update:visible', false)">关闭</el-button>
    </span>
  </el-dialog>
</template>

<script>
import Code from '@/components/Code';
export default {
  props: ['dataSource', 'formConfig', 'visible'],
  components: {
    Code
  },
  data() {
    return {
      formData: {},
      // eslint-disable-next-line no-useless-escape
      importCode: '<script src="/lucy.js"><\/script>',
      viewerCode: `<lucy\n  :data-source="json"\n  v-model="value"\n/>`,
    };
  }
};
</script>

<style lang="scss" scoped>

</style>
