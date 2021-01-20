<template>
  <div>
    <viewer
      :data-source="components"
      :value="value"
      theme="mini"
      @input="(val) => handleChange(val)"
    />
    <code><pre>{{ JSON.stringify(value) }}</pre></code>
  </div>
</template>

<script>
import data from './data.json';
import { prepareComponents } from '@/utils/prepare-config';
export default {
  data() {
    return {
      value: {},
      components: prepareComponents(data)
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
