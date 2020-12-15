<template>
  <el-dialog
    width="75%"
    class="dialog-no-header"
    :visible.sync="visible"
  >
    <el-tabs>
      <el-tab-pane label="表单">
        <viewer
          v-if="visible"
          v-model="dataForm"
          :data-source="dataSource"
          :form-config="formConfig"
        />
        {{ JSON.stringify(dataForm, undefined, 2)}}
      </el-tab-pane>
      <el-tab-pane label="JSON">
        <code><pre>{{ JSON.stringify(dataSource, undefined, 2) }}</pre></code>
      </el-tab-pane>
    </el-tabs>
    <span slot="footer">
      <el-button @click="$emit('update:visible', false)">关闭</el-button>
    </span>
  </el-dialog>
</template>

<script>

export default {
  props: ['dataSource', 'formConfig', 'visible'],
  data() {
    return {
      dataForm: {}
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
