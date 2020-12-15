<template>
  <el-date-picker
    v-bind="$attrs"
    @input="(val) => $emit('input', val)"
    type="datetimerange"
  />
</template>
