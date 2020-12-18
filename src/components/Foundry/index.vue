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
    <div class="content">
      <editor-panel ref="editorPanel" :config="config" />
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
      id: '',
      myMenus: [],
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
      this.$refs.editorPanel.add(item);
    },
    createPanel() {
      this.id = uuid();
      this.myMenus.push({
        id: this.id,
        type: 'view',
        title: `未命名`,
        components: [

        ],
        tag: '自定义组件'
      });
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
  .content {
    flex: auto;
    background: rgb(250, 250, 250);
    display: flex;
    flex-direction: column;
  }
}
</style>
