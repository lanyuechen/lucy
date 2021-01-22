<template>
  <viewer
    :data-source="components"
    :value="value"
    :form-config="formConfig"
    :theme="theme"
    @input="(val) => $emit('input', val)"
  />
</template>

<script>
export default {
  props: [
    'value', 'components', 'formConfig', 'theme'
  ],
};
</script>
