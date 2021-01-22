<template>
  <div class="container">
    <div class="empty" v-if="!dataSource.length">从左侧拖拽或点击来添加字段</div>
    <el-form
      v-bind="formConfig"
      :model="formData"
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
          @click="$emit('click', c)"
          @copy="copy(c.id)"
          @remove="remove(c.id)"
        >
          <el-form-item
            :prop="c.key"
            :label="c.title"
            :rules="c.rules | prepareRules"
          >
            <wardrobe
              v-if="linkageShow(c.linkage, formData[c.key])"
              v-model="formData[c.key]"
              :config="c | prepareConfig(source)"
              :disabled="linkageEnable(c.linkage, formData[c.key])"
            />
          </el-form-item>
        </form-box>
      </draggable>
    </el-form>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import FormBox from '@/components/FormBox';
import Wardrobe from '@/wardrobe';
import { uuid, linkageShow, linkageEnable, prepareRules, prepareConfig } from '@/utils/util';

export default {
  props: ['source', 'formConfig', 'current', 'dataSource', 'formData'],
  filters: {
    prepareRules,
    prepareConfig,
  },
  components: {
    draggable,
    FormBox,
    Wardrobe,
  },
  data() {
    return {
    };
  },
  methods: {
    remove(id) {
      const idx = this.dataSource.findIndex(d => d.id === id);
      if (this.current === id) {
        this.$emit('update:current', '');
      }
      this.dataSource.splice(idx, 1);
    },
    copy(id) {
      const idx = this.dataSource.findIndex(d => d.id === id);
      const newId = uuid();
      this.dataSource.splice(idx + 1, 0, {
        ...this.dataSource[idx],
        id: newId,
        key: `${this.dataSource[idx].type}_${newId.substr(0, 4)}`
      });
    },
    linkageShow,
    linkageEnable,
  }
};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  position: relative;
  form {
    height: 100%;
    width: 100%;
  }
}
.drag-area {
  width: 100%;
  min-height: 100%;
  overflow: hidden;
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
