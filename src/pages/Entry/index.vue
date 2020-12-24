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

export default {
  name: 'App',
  components: {
    Foundry,
  },
  data() {
    return {
      config: this.prepareConfig(CONFIG),
      // config: CONFIG,
    };
  },
  methods: {
    prepareConfig(config) {
      return {
        ...config,
        components: this.prepareComponents(config.components),
        form: this.prepareComponents(config.form),
        reference: this.prepareComponents(config.reference),
      };
    },
    prepareComponents(components) {
      if (!components) {
        return components;
      }
      return components.map(this.prepareComponent);
    },
    prepareComponent(component) {
      if (typeof component === 'string') {
        const [type, title, tag, ...props] = component.split('|');
        return { type, title, tag, props };
      }
      const args = component.type.split('|');
      if (args.length > 1) {
        const [type, title, tag, ...props] = args;
        return {
          title,
          tag,
          props,
          ...component,
          components: this.prepareComponents(component.components),
          options: this.prepareOptions(component.options),
          type
        };
      }
      return {
        ...component,
        components: this.prepareComponents(component.components),
        options: this.prepareOptions(component.options),
      };
    },
    prepareOptions(options) {
      if (!options) {
        return [];
      }
      if (typeof options === 'string') {
        options = options.split('|');
      }
      return options.map(option => {
        if (typeof option === 'string') {
          option = option.split(':');
        }
        if (Array.isArray(option)) {
          return { key: option[0], value: option[1] || option[0] };
        }
        return option;
      });
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
