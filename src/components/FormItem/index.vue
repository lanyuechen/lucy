<template>
  <el-form-item
    :label="config.title"
    :prop="config.key"
  >
    <component
      :is="`ff-${config.type}`"
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
    'ff-select': require('@/components/FormItem/basic/Select').default,
    'ff-checkbox-group': require('@/components/FormItem/basic/CheckboxGroup').default,
    'ff-radio-group': require('@/components/FormItem/basic/RadioGroup').default,
    'ff-input': require('@/components/FormItem/basic/Input').default,
    'ff-number': require('@/components/FormItem/basic/Number').default,
    'ff-textarea': require('@/components/FormItem/basic/Textarea').default,

    // 高级组件
    'ff-dynamic': require('@/components/FormItem/advance/Dynamic').default,

    // 布局组件
    'ff-grid': require('@/components/FormItem/layout/Grid').default,
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
