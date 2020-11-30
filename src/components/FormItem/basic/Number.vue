<template>
  <el-input-number
    v-bind="$attrs"
    @input="(val) => $emit('input', val)"
  />
</template>
