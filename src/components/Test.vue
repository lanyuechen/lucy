<template>
  <div>
    <view
      :data-source="component"
      :value="value"
      @input="(val) => handleChange(val)"
    />
  </div>
</template>

<script>
import view from '@/components/FormFoundry/view';

export default {
  components: {
    view
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
