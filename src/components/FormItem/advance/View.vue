<template>
  <view
    :data-source="components"
    :value="value"
    @input="(val) => $emit('input', val)"
  />
</template>

<script>
export default {
  props: [
    'value', 'components'
  ],
};
</script>
