<template>
  <el-slider
    v-bind="$attrs"
    @input="(val) => $emit('input', val)"
  />
</template>
