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
import { calcCondition } from '@/utils/util';

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
      this.formData = Object.assign({}, this.value, this.formData); // 防止使用v-model时污染formData变量
      this.formData[key] = val;
      this.$nextTick(() => {
        this.$emit('input', this.formData);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
