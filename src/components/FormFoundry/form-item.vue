<template>
  <el-form-item
    :label="config.title"
    :prop="config.key"
  >
    <el-select
      v-if="config.type === 'select'"
      :placeholder="config.placeholder"
      :disabled="disabled"
      :value="value"
      @input="(val) => $emit('input', val)"
    >
      <el-option
        v-for="option in config.options"
        :key="option | optionFilter('key')"
        :value="option | optionFilter('value')"
        :label="option | optionFilter('value')"
      />
    </el-select>

    <el-checkbox-group
      v-else-if="config.type === 'checkbox'"
      :disabled="disabled"
      :value="value || []"
      @input="(val) => $emit('input', val)"
    >
      <el-checkbox
        v-for="option in config.options"
        :key="option | optionFilter('key')"
        :label="option | optionFilter('key')"
      >
        {{ option | optionFilter('value') }}
      </el-checkbox>
    </el-checkbox-group>

    <el-radio-group
      v-else-if="config.type === 'radio'"
      :disabled="disabled"
      :value="value"
      @input="(val) => $emit('input', val)"
    >
      <el-radio
        v-for="option in config.options"
        :key="option | optionFilter('key')"
        :label="option | optionFilter('key')"
      >
        {{ option | optionFilter('value') }}
      </el-radio>
    </el-radio-group>

    <component
      :is="componentName"
      v-else
      v-bind="componentProps"
      :type="config.type"
      :disabled="disabled"
      :value="value"
      @input="(val) => $emit('input', val)"
    />
  </el-form-item>
</template>

<script>

export default {
  filters: {
    optionFilter(option, key) {
      return typeof option === 'string' ? option : option[key];
    }
  },
  props: [
    // eslint-disable-next-line vue/require-prop-types
    'config', 'value', 'disabled'
  ],
  data() {
    return {

    };
  },
  computed: {
    componentName: function() {
      return {
        input: 'el-input',
        number: 'el-input-number',
        textarea: 'el-input'
      }[this.$props.config.type];
    },
    componentProps: function() {
      const res = {};
      Object.entries(this.$props.config).forEach(([k, v]) => {
        if (!['id', 'type', 'key', 'title', 'defaultValue', 'options'].includes(k)) {
          res[k] = v;
        }
      });
      return res;
    }
  },
  watch: {
    'config.defaultValue': function(val) {
      this.$emit('input', val);
    }
  },
  mounted() {
    this.$emit('input', this.config.defaultValue);
  },
  methods: {
  }
};
</script>
