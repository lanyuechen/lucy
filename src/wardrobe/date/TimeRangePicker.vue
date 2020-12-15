<template>
  <el-time-picker
    is-range
    v-bind="$attrs"
    @input="(val) => $emit('input', val)"
  />
</template>
