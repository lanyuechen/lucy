<template>
  <component
    :is="`wardrobe-${config.type || 'input'}`"
    v-bind="configFilter(config)"
    :options="config.options | filter"
    :disabled="disabled"
    :value="value"
    :theme="theme"
    @input="(val) => $emit('input', val)"
  />
</template>

<script>
export default {
  components: {
    // 基础组件
    'wardrobe-select': require('./basic/Select').default,
    'wardrobe-radio-group': require('./basic/RadioGroup').default,
    'wardrobe-checkbox-group': require('./basic/CheckboxGroup').default,
    'wardrobe-checkbox': require('./basic/Checkbox').default,
    'wardrobe-input': require('./basic/Input').default,
    'wardrobe-number': require('./basic/Number').default,
    'wardrobe-textarea': require('./basic/Textarea').default,
    'wardrobe-switch': require('./basic/Switch').default,
    'wardrobe-upload': require('./basic/Upload').default,

    // 日期时间组件
    'wardrobe-date': require('./date/DatePicker').default,
    'wardrobe-date-range': require('./date/DateRangePicker').default,
    'wardrobe-time': require('./date/TimePicker').default,
    'wardrobe-time-range': require('./date/TimeRangePicker').default,
    'wardrobe-date-time': require('./date/DateTimePicker').default,
    'wardrobe-date-time-range': require('./date/DateTimeRangePicker').default,

    // 高级组件
    'wardrobe-dynamic': require('./advance/Dynamic').default,
    'wardrobe-view': require('./advance/View').default,

    // 其他
    'wardrobe-icon': require('./other/Icon').default,
  },
  props: [
    // eslint-disable-next-line vue/require-prop-types
    'config', 'value', 'disabled', 'theme'
  ],
  filters: {
    filter(value) {
      return value ? value.filter(d => d) : [];
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
    configFilter(config) {
      const newConfig = { ...config };
      ['$ref'].forEach(k => {
        delete newConfig[k];
      });
      return newConfig;
    }
  }
};
</script>
