<template>
  <div>
    <viewer
      :data-source="components"
      :value="value"
      theme="mini"
      @input="(val) => handleChange(val)"
    />
    <Code :json="value" />
  </div>
</template>

<script>
import reference from './Entry/config/reference.yaml';
import Code from '@/components/Code';
import { prepareComponents } from '@/utils/prepare-config';
export default {
  components: {
    Code,
  },
  data() {
    return {
      value: {},
      components: prepareComponents(Object.values(reference)),
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
