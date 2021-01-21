<template>
  <el-checkbox
    v-bind="$attrs"
    @input="(val) => $emit('input', val)"
  />
</template>
