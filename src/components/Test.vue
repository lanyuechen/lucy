<template>
  <div>
    <preview
      :data-source="component"
      :value="value"
      @input="(val) => handleChange(val)"
    />
  </div>
</template>

<script>
import preview from '@/components/FormFoundry/preview';

export default {
  components: {
    preview
  },
  data() {
    return {
      value: {},
      component: [
        {
          type: 'input',
          key: 'key',
          placeholder: 'key'
        },
        {
          type: 'input',
          key: 'value',
          placeholder: 'value'
        }
      ]
    };
  },
  methods: {
    handleChange(val) {
      this.value = val;
    }
  }
};
</script>

<style scoped>

</style>
