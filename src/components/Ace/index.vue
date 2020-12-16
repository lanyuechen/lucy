<template>
  <div ref="ace"></div>
</template>

<script>
import ace from 'ace-builds';
import 'ace-builds/webpack-resolver'; // 在 webpack 环境中使用必须要导入
import 'ace-builds/src-noconflict/theme-monokai'; // 默认设置的主题
import 'ace-builds/src-noconflict/mode-json'; // 默认设置的语言模式

export default {
  props: {
    value: {
      type: String,
      default: () => ''
    },
  },
  mounted() {
    this.aceEditor = ace.edit(this.$refs.ace, {
      maxLines: 20, // 最大行数，超过会自动出现滚动条
      minLines: 10, // 最小行数，还未到最大行数时，编辑器会自动伸缩大小
      fontSize: 14, // 编辑器内字体大小
      tabSize: 2, // 制表符设置为 2 个空格大小
      value: this.value,
      theme: 'ace/theme/monokai', // 默认设置的主题
      mode: 'ace/mode/json', // 默认设置的语言模式
    });
    this.session = this.aceEditor.getSession();

    this.session.on('change', this.handleChange);
  },
  methods: {
    handleChange() {
      this.$emit('input', this.session.getValue());
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
