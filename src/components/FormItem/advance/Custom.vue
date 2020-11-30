<template>
  <el-input
    type="textarea"
    v-bind="$attrs"
    @input="(val) => $emit('input', val)"
  />
</template>

<script>
export default {
  props: [

  ],
  data() {
    return {

    };
  },
  methods: {
  }
};
</script>
