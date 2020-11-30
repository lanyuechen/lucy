<template>
  <el-radio-group
    v-bind="$attrs"
    @input="(val) => $emit('input', val)"
  >
    <el-radio
      v-for="option in options"
      :key="option.key"
      :label="option.key"
    >
      {{ option.value }}
    </el-radio>
  </el-radio-group>
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
