<template>
  <el-form label-width="auto">
    <div v-for="c in dataSource" :key="c.id">
      <form-item
        :config="c"
        :value="value[c.key]"
        :disabled="c.disabled | calcCondition(value)"
        @input="(val) => handleInput(c.key, val)"
      />
    </div>
  </el-form>
</template>

<script>
import { calcCondition } from './util';

export default {
  filters: {
    calcCondition
  },
  props: {
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
    // handleInput(key, val) {
    //   this.$emit('input', {
    //     ...this.$props.value,
    //     [key]: val
    //   });
    // },
    handleInput(key, val) {
      // 直接emit会导致连续多次emit后面的数据覆盖前面的数据，因此在这里收集所有变化再提交到父组件
      clearTimeout(this.emitHandler);
      this.formData = this.formData || {};
      this.formData[key] = val;
      this.emitHandler = setTimeout(() => {
        this.$emit('input', this.formData);
      }, 0);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
