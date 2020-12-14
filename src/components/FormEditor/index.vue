<template>
  <div class="body">
    <div class="empty" v-if="!dataSource.length">从左侧拖拽或点击来添加字段</div>
    <el-form
      v-bind="formConfig"
    >
      <draggable
        :list="dataSource"
        :animation="200"
        ghost-class="ghost"
        group="component"
        class="drag-area"
      >
        <form-box
          v-for="c in dataSource"
          :key="c.id"
          :active="current === c.id"
          @click="current = c.id"
          @copy="copy(c.id)"
          @remove="remove(c.id)"
        >
          <form-item
            v-model="dataForm[c.key]"
            :config="c"
            :disabled="c.disabled | calcCondition(dataForm)"
          />
        </form-box>
      </draggable>
    </el-form>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import FormBox from '@/components/FormBox';
import { uuid, calcCondition } from './util';
import CONFIG from './config.json';

export default {
  props: ['formConfig'],
  components: {
    draggable,
    FormBox,
  },
  filters: {
    calcCondition
  },
  data() {
    return {
      current: '',
      currentConfig: 'form',
      props: CONFIG.props,
      defines: CONFIG.defines,
      formDefines: CONFIG.form,
      dataSource: [],
      customComponents: [],
      dataForm: {}
    };
  },
  computed: {
    currentIdx() {
      return this.dataSource.findIndex(d => d.id === this.current);
    },
    currentProps() {
      const c = this.dataSource[this.currentIdx];
      if (!c) {
        return;
      }
      const props = this.props[c.type] || [];
      return this.defines.filter(d => props.includes(d.tag));
    }
  },
  methods: {
    remove(id) {
      const idx = this.dataSource.findIndex(d => d.id === id);
      if (this.current === id) {
        this.current = '';
      }
      this.dataSource.splice(idx, 1);
    },
    copy(id) {
      const idx = this.dataSource.findIndex(d => d.id === id);
      const newId = uuid();
      this.dataSource.splice(idx, 0, {
        ...this.dataSource[idx],
        id: newId,
        key: `${this.dataSource[idx].type}_${newId.substr(0, 4)}`
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.body {
  background: #fff;
  position: relative;
  form {
    height: 100%;
  }
}
.drag-area {
  width: 100%;
  height: 100%;
}
.empty {
  color: #ccc;
  font-size: 22px;
  text-align: center;
  position: absolute;
  top: 50%;
  width: 100%;
}
.sortable-chosen {
  margin: 2px;
  list-style: none;
  border: 1px dashed hsla(0,0%,66.7%,.5);
  background-color: rgba(236,245,255,.3);
}
</style>
