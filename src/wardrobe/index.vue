<template>
  <el-form-item
    :label="config.title"
    :prop="config.key"
    :rules="config.rules"
  >
    <component
      :is="`wardrobe-${config.type || 'input'}`"
      :options="config.options"
      :disabled="disabled"
      :placeholder="config.placeholder"
      :components="config.components"
      :value="value"
      @input="(val) => $emit('input', val)"
    />
  </el-form-item>
</template>

<script>
export default {
  components: {
    // 基础组件
    'wardrobe-select': require('./basic/Select').default,
    'wardrobe-checkbox-group': require('./basic/CheckboxGroup').default,
    'wardrobe-radio-group': require('./basic/RadioGroup').default,
    'wardrobe-input': require('./basic/Input').default,
    'wardrobe-number': require('./basic/Number').default,
    'wardrobe-textarea': require('./basic/Textarea').default,
    'wardrobe-switch': require('./basic/Switch').default,

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
  },
  props: [
    // eslint-disable-next-line vue/require-prop-types
    'config', 'value', 'disabled'
  ],
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
