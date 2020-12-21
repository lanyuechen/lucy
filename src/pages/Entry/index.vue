<template>
  <Foundry
    :config="config"
  />
</template>

<script>
import Foundry from '@/components/Foundry';
// import CONFIG from './config.json';
import CONFIG from './config.yaml';

export default {
  name: 'App',
  components: {
    Foundry,
  },
  data() {
    return {
      config: CONFIG,
    };
  }
};
</script>

<style lang="scss" scoped>

</style>
