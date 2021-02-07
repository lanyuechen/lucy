<template>
  <el-input
    type="textarea"
    v-bind="$attrs"
    :maxlength="$attrs.showWordLimit && $attrs.maxlength"
    @input="(val) => $emit('input', val)"
  />
</template>
