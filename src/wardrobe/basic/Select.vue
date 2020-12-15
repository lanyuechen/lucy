<template>
  <el-select
    v-bind="$attrs"
    @input="(val) => $emit('input', val)"
  >
    <el-option
      v-for="option in options"
      :key="option.key"
      :value="option.key"
      :label="option.value"
    />
  </el-select>
</template>

<script>
export default {
  props: [
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
