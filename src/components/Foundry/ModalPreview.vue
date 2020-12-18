<template>
  <el-dialog
    width="75%"
    class="dialog-no-header"
    :visible="visible"
    :before-close="() => $emit('update:visible', false)"
  >
    <el-tabs>
      <el-tab-pane label="表单" lazy>
        <viewer
          v-model="formData"
          :data-source="dataSource"
          :form-config="formConfig"
        />
        <!-- 大写用于区分原code标签 -->
        <Code :json="formData" />
      </el-tab-pane>
      <el-tab-pane label="JSON" lazy>
        <Code :json="dataSource" />
      </el-tab-pane>
    </el-tabs>
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
      formData: {}
    };
  }
};
</script>

<style lang="scss" scoped>
.dialog-no-header {
  & >>> .el-dialog__header {
    display: none;
  }
  & >>> .el-dialog__body {
    padding: 20px;
  }
}
</style>
