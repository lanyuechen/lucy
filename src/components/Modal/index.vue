<template>
  <el-dialog
    title="重命名"
    :visible.sync="visible"
  >
    <viewer
      v-model="formData"
      :data-source="dataSource"
    />
    <span slot="footer" class="dialog-footer">
      <el-button @click="close()">取 消</el-button>
      <el-button type="primary" @click="confirm(formData)">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  props: ['title', 'formConfig'],
  data() {
    return {
      visible: false,
      formData: {},
      dataSource: [],
      confirm: () => {},
    };
  },
  methods: {
    open(dataSource, cb) {
      this.dataSource = dataSource;
      this.visible = true;
      if (typeof cb === 'function') {
        this.confirm = (item) => {
          cb(item);
          this.close();
        };
      }
    },
    close() {
      this.visible = false;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
