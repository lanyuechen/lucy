<template>
  <div class="container">
    <div class="left">
      <draggable-menus
        title="自定义组件"
        :data-source="myMenus"
        addable
        @click="add"
        @add="createPanel"
      />
      <draggable-menus
        v-for="menu in menus"
        :key="menu[0]"
        :title="menu[0]"
        :data-source="menu[1]"
        @click="add"
      />
    </div>
    <div class="right">
      <el-tabs v-model="current" type="border-card" closable @tab-remove="close">
        <el-tab-pane
          v-for="item in actives"
          :key="item.id"
          :name="item.id"
          :label="item.title"
        >
          <editor-panel ref="editorPanel" :config="config" />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import { uuid } from '@/utils/util';
import DraggableMenus from './DraggableMenus';
import EditorPanel from './EditorPanel';

export default {
  props: ['config'],
  components: {
    DraggableMenus,
    EditorPanel,
  },
  data() {
    return {
      current: '',
      myMenus: [],
      actives: [],
      menus: this.prepareMenus(this.config.components),
    };
  },
  methods: {
    prepareMenus(menus) {
      return Object.entries(
        menus.reduce((p, n) => {
          p[n.tag] = p[n.tag] || [];
          p[n.tag].push(n);
          return p;
        }, {})
      );
    },
    add(item) {
      const idx = this.actives.findIndex(d => d.id === this.current);
      if (idx > -1) {
        this.$refs.editorPanel[idx].add(item);
      }
    },
    createPanel() {
      this.current = uuid();
      const newMenu = {
        id: this.current,
        type: 'view',
        title: `未命名`,
        components: [

        ],
        tag: '自定义组件'
      };
      this.myMenus.push(newMenu);
      this.actives.push(newMenu);
    },
    close(id) {
      const idx = this.actives.findIndex(d => d.id === id);
      this.actives.splice(idx, 1);
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  height: 100%;
  align-items: stretch;
  .left {
    flex: none;
    width: 256px;
    border-right: 1px solid rgb(224, 224, 224);
    padding: 8px 0;
    display: flex;
    flex-direction: column;
  }
  .right {
    flex: auto;
    background: rgb(250, 250, 250);
    display: flex;
    flex-direction: column;
    &>>>.el-tabs {
      height: 100%;
      box-shadow: none;
      border: none;
      .el-tabs__content {
        height: calc(100% - 39px);
        padding: 0;
        .el-tab-pane {
          height: 100%;
        }
      }
    }
  }
}
</style>
