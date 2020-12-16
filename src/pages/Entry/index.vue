<template>
  <Foundry
    :config="config"
    :data-source="dataSource"
  />
</template>

<script>
import Foundry from '@/components/Foundry';
import CONFIG from './config.json';

export default {
  name: 'App',
  components: {
    Foundry,
  },
  data() {
    return {
      config: CONFIG,
      dataSource: [],
    };
  }
};
</script>

<style lang="scss" scoped>

</style>
