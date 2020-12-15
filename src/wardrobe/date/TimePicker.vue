<template>
  <el-time-picker
    v-bind="$attrs"
    @input="(val) => $emit('input', val)"
  />
</template>
