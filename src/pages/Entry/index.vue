<template>
  <Foundry
    :config="config"
  />
</template>

<script>
import Foundry from '@/components/Foundry';
// import CONFIG from './config.json';
import CONFIG from './config.yaml';
// import CONFIG from './config-simple.yaml';
import prepareConfig from '@/utils/prepare-config';

export default {
  name: 'App',
  components: {
    Foundry,
  },
  data() {
    return {
      config: prepareConfig(CONFIG),
      // config: CONFIG,
    };
  },
  methods: {

  }
};
</script>

<style lang="scss" scoped>

</style>
