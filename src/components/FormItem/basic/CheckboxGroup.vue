<template>
  <el-checkbox-group
    v-bind="$attrs"
    :value="value || []"
    @input="(val) => $emit('input', val)"
  >
    <el-checkbox
      v-for="option in options"
      :key="option.key"
      :label="option.key"
    >
      {{ option.value }}
    </el-checkbox>
  </el-checkbox-group>
</template>

<script>
export default {
  props: [
    'options', 'value'
  ],
  data() {
    return {

    };
  },
  methods: {
  }
};
</script>
