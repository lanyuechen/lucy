<template>
  <el-upload
    drag
    multiple
    action=""
    :before-upload="beforeUpload"
    :before-remove="beforeRemove"
    :file-list="value"
  >
    <i class="el-icon-upload"></i>
    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
    <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
  </el-upload>
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    beforeUpload(file) {
      this.$emit('input', [...this.value, file]);
      return false;
    },
    beforeRemove(file, fileList) {
      this.$emit('input', fileList.filter(d => d !== file));
      return false;
    }
  }
};
</script>
