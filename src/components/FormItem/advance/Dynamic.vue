<template>
  <div>
    <el-row
      type="flex"
      :gutter="5"
      v-for="(item, idx) in value"
      :key="item.key"
    >
      <el-col style="flex: auto">
        <el-input :value="value[idx]" @input="(val) => handleChange(idx, val)" />
      </el-col>
      <el-col style="width: 36px;">
        <a @click="remove(idx)"><i class="el-icon-delete" /></a>
      </el-col>
    </el-row>

    <el-button type="text" @click="add">添加新项</el-button>
  </div>
</template>

<script>
export default {
  props: [
    'value'
  ],
  data() {
    return {

    };
  },
  methods: {
    add() {
      this.$emit('input', [...(this.value || []), '']);
    },
    remove(idx) {
      this.$emit('input', this.value.filter((d, i) => i !== idx));
    },
    handleChange(idx, val) {
      this.$emit('input', this.value.map((d, i) => i === idx ? val : d));
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
