<template>
  <el-slider
    range
    v-bind="$attrs"
    @input="(val) => $emit('input', val)"
  />
</template>
