<template>
  <el-input
    v-bind="$attrs"
    @input="(val) => $emit('input', val)"
  />
</template>
