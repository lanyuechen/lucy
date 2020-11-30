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
import formItem from '@/components/FormItem';
import { calcCondition } from './util';

export default {
  components: {
    formItem
  },
  filters: {
    calcCondition
  },
  props: [
    'dataSource', 'value'
  ],
  data() {
    return {

    };
  },
  methods: {
    handleInput(key, val) {
      this.$emit('input', {
        ...this.$props.value,
        [key]: val
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
