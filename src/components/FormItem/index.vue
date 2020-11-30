<template>
  <el-form-item
    :label="config.title"
    :prop="config.key"
  >
    <component
      :is="`ff-${config.type}`"
      :options="options"
      :placeholder="config.placeholder"
      :disabled="disabled"
      :value="value"
      @input="(val) => $emit('input', val)"
    />
  </el-form-item>
</template>

<script>

export default {
  components: {
    // 基础组件
    'ff-select': require('@/components/FormItem/basic/Select').default,
    'ff-checkbox-group': require('@/components/FormItem/basic/CheckboxGroup').default,
    'ff-radio-group': require('@/components/FormItem/basic/RadioGroup').default,
    'ff-input': require('@/components/FormItem/basic/Input').default,
    'ff-number': require('@/components/FormItem/basic/Number').default,
    'ff-textarea': require('@/components/FormItem/basic/Textarea').default,

    // 高级组件
    'ff-custom': require('@/components/FormItem/advance/Custom').default,
    'ff-dynamic': require('@/components/FormItem/advance/Dynamic').default,
  },
  props: [
    // eslint-disable-next-line vue/require-prop-types
    'config', 'value', 'disabled'
  ],
  computed: {
    options: function() {
      if (!this.config.options) {
        return this.config.options;
      }
      return this.config.options.map(option => {
        if (typeof option === 'string') {
          return {key: option, value: option};
        }
        return option;
      });
    }
  },
  data() {
    return {

    };
  },
  watch: {
    'config.defaultValue': function(val) {
      this.$emit('input', val);
    }
  },
  mounted() {
    if (typeof this.config.defaultValue !== 'undefined') {
      this.$emit('input', this.config.defaultValue);
    }
  },
  methods: {
  }
};
</script>
