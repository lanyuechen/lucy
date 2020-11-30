<template>
  <el-select
    v-bind="$attrs"
    @input="(val) => $emit('input', val)"
  >
    <el-option
      v-for="option in options"
      :key="option.key"
      :value="option.value"
      :label="option.value"
    />
  </el-select>
</template>

<script>
export default {
  props: [
    // eslint-disable-next-line vue/require-prop-types
    'options'
  ],
  data() {
    return {

    };
  },
  methods: {
  }
};
</script>
