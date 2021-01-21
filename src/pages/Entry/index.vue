<template>
  <Foundry
    :config="config"
  />
</template>

<script>
import Foundry from '@/components/Foundry';
// import CONFIG from './config-simple.yaml';
import prepareConfig from '@/utils/prepare-config';
import components from './config/components.yaml';
import form from './config/form-config.yaml';
import mapping from './config/mapping.yaml';
import reference from './config/reference.yaml';

export default {
  name: 'App',
  components: {
    Foundry,
  },
  data() {
    return {
      config: prepareConfig({
        components,
        form,
        mapping,
        reference,
      }),
      // config: CONFIG,
    };
  },
  methods: {

  }
};
</script>

<style lang="scss" scoped>

</style>
