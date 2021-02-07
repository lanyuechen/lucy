<template>
  <el-rate
    v-bind="$attrs"
    @input="(val) => $emit('input', val)"
  />
</template>
