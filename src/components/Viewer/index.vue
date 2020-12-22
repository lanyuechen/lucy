<template>
  <el-form v-bind="formConfig">
    <form-item
      v-for="c in dataSource"
      :key="c.id"
      :config="c"
      :value="value[c.key]"
      :disabled="c.disabled | calcCondition(value)"
      @input="(val) => handleInput(c.key, val)"
    />
  </el-form>
</template>

<script>
import { calcCondition } from '@/utils/util';

export default {
  filters: {
    calcCondition
  },
  props: {
    formConfig: {
      type: Object,
      default: () => ({
        labelWidth: 'auto'
      })
    },
    dataSource: {
      type: Array,
      default: () => []
    },
    value: {
      type: Object,
      default: () => ({})
    }
  },
  // props: [
  //   'dataSource', 'value'
  // ],
  data() {
    return {

    };
  },
  methods: {
    // 这么写是为了防止连续多次emit操作会覆盖之前的值
    handleInput(key, val) {
      this.value[key] = val;
      this.$emit('input', {
        ...this.value,
      });
    },
  }
};
</script>

<style lang="scss" scoped>
</style>
