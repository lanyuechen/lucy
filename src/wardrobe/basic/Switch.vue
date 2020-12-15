<template>
  <el-switch
    v-bind="$attrs"
    @input="(val) => $emit('input', val)"
  />
</template>
