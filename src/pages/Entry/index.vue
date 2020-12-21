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
      config: this.prepareConfig(CONFIG),
    };
  },
  methods: {
    prepareConfig(config) {
      return {
        ...config,
        components: config.components.map(this.prepareComponent)
      };
    },
    prepareComponent(component) {
      if (typeof component === 'string') {
        const [type, title, tag, ...props] = component.split('|');
        return { type, title, tag, props };
      }
      return component;
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
