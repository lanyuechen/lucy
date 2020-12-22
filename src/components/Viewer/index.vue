<template>
  <el-form v-bind="formConfig" :model="value">
    <template v-for="c in dataSource">
      <el-form-item
        :key="c.id"
        :prop="c.key"
        :label="c.title"
        :rules="c.rules"
      >
        <form-item
          v-if="linkageShow(c.linkage, value)"
          :config="c"
          :value="value[c.key]"
          :disabled="linkageEnable(c.linkage, value)"
          @input="(val) => handleInput(c.key, val)"
        />
      </el-form-item>
    </template>
  </el-form>
</template>

<script>
import { linkageShow, linkageEnable } from '@/utils/util';

export default {
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
    handleInput(key, val) {
      this.value[key] = val;
      this.$emit('input', {
        ...this.value,
      });
    },
    linkageShow,
    linkageEnable,
  }
};
</script>

<style lang="scss" scoped>
</style>
