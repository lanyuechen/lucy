<template>
  <div>
    <el-row
      v-for="(item, idx) in value"
      :key="idx"
      :gutter="5"
      type="flex"
    >
      <el-col style="flex: auto">
        <!-- 下面在components外多封装了一层view，这样可以折叠该部分表单了 -->
        <viewer
          v-if="useView"
          :data-source="[{ type: 'view', key: '_key', title: `项目${idx + 1}`, components }]"
          :form-config="formConfig"
          :value="{ _key: value[idx] }"
          :theme="theme"
          @input="({ _key }) => handleChange(idx, _key)"
        />
        <!-- 默认不折叠 -->
        <viewer
          v-else
          :data-source="components"
          :form-config="formConfig"
          :value="value[idx]"
          :theme="theme"
          @input="(val) => handleChange(idx, val)"
        />
      </el-col>
      <el-col style="width: 36px;">
        <a @click="remove(idx)"><i class="el-icon-delete" /></a>
      </el-col>
    </el-row>

    <el-button type="text" @click="add">添加新项</el-button>
  </div>
</template>

<script>
export default {
  props: [
    'value', 'components', 'formConfig', 'useView', 'theme'
  ],
  data() {
    return {

    };
  },
  methods: {
    add() {
      this.$emit('input', [...(this.value || []), undefined]);
    },
    remove(idx) {
      this.$emit('input', this.value.filter((d, i) => i !== idx));
    },
    handleChange(idx, val) {
      this.$emit('input', this.value.map((d, i) => i === idx ? val : d));
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
