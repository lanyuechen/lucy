<template>
  <el-form v-bind="formConfig" :model="value" class="theme-mini">
    <template v-for="(c, idx) in dataSource">
      <el-form-item
        v-if="linkageShow(c.linkage, value)"
        :class="{
          'form-item-dynamic': c.type === 'dynamic',
          'form-item-view': c.type === 'view',
          'form-item-collapsed': collapsed.includes(idx)
        }"
        :key="c.id"
        :prop="c.key"
        :label="c.title"
        :rules="c.rules | prepareRules"
      >
        <template v-if="['dynamic', 'view'].includes(c.type)" slot="label">
          <div class="collapsed-btn" @click="toggle(idx)">
            {{ collapsed.includes(idx) ? '+' : '-'}}
          </div>
          {{ c.title }}
        </template>
        <form-item
          :config="c | prepareConfig(source)"
          :value="value[c.key]"
          :disabled="linkageEnable(c.linkage, value)"
          @input="(val) => handleInput(c.key, val)"
        />
      </el-form-item>
    </template>
  </el-form>
</template>

<script>
import { linkageShow, linkageEnable, prepareRules, prepareConfig } from '@/utils/util';
import './theme.scss';

export default {
  filters: {
    prepareRules,
    prepareConfig,
  },
  props: {
    source: {
      type: Array,
      default: () => []
    },
    formConfig: {
      type: Object,
      default: () => ({
        labelWidth: 'auto'
      })
    },
    dataSource: {
      type: Array,
      default: () => []
    },
    value: {
      type: Object,
      default: () => ({})
    }
  },
  // props: [
  //   'dataSource', 'value'
  // ],
  data() {
    return {
      collapsed: []
    };
  },
  methods: {
    toggle(i) {
      const idx = this.collapsed.indexOf(i);
      if (idx > -1) {
        this.collapsed.splice(idx, 1);
      } else {
        this.collapsed.push(i);
      }
    },
    handleInput(key, val) {
      this.value[key] = val;
      this.$emit('input', {
        ...this.value,
      });
    },
    linkageShow,
    linkageEnable,
  }
};
</script>

<style lang="scss" scoped>
</style>
