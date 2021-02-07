<template>
  <el-input
    type="text"
    v-bind="$attrs"
    :maxlength="$attrs.showWordLimit && $attrs.maxlength"
    @input="(val) => $emit('input', val)"
  />
</template>
