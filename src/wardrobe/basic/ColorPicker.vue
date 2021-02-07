<template>
  <el-color-picker
    v-bind="$attrs"
    @input="(val) => $emit('input', val)"
  />
</template>
