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

    // handleInput(key, val) {
    //   this.$emit('input', {
    //     ...this.value,
    //     [key]: val
    //   });
    // },

    // 这种方式也是不行的，切换组件时会把之前的属性带到新的组件，造成十分诡异的bug
    // handleInput(key, val) {
    //   // 直接emit会导致连续多次emit后面的数据覆盖前面的数据，因此在这里收集所有变化再提交到父组件
    //   this.formData = Object.assign({}, this.value, this.formData); // 防止使用v-model时污染formData变量
    //   this.formData[key] = val;
    //   this.$nextTick(() => {
    //     this.$emit('input', this.formData);
    //   });
    // }
  }
};
</script>

<style lang="scss" scoped>
</style>
