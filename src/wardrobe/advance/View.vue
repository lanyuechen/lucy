<template>
  <viewer
    :data-source="components"
    :value="value"
    :form-config="formConfig"
    @input="(val) => $emit('input', val)"
  />
</template>

<script>
export default {
  props: [
    'value', 'components', 'formConfig'
  ],
};
</script>
