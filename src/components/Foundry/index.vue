<template>
  <div class="container">
    <div class="left">
      <draggable-menus
        title="自定义组件"
        :data-source="myMenus"
        :operations="operations"
        :current="current"
        addable
        @click="(item, origin) => edit(origin)"
        @add="create"
      />
      <draggable-menus
        v-for="menu in menus"
        :key="menu[0]"
        :title="menu[0]"
        :data-source="menu[1]"
        @click="addComponent"
      />
    </div>
    <div class="right">
      <el-tabs v-if="actives.length" v-model="current" type="border-card" closable @tab-remove="close">
        <el-tab-pane
          v-for="item in actives"
          :key="item.id"
          :name="item.id"
          :label="item.title"
        >
          <editor-panel
            ref="editorPanel"
            :source="myMenus"
            :data-source="item.components"
            :config="config"
            @save="save"
          />
        </el-tab-pane>
      </el-tabs>
      <div class="empty" v-else>
        <!-- <eye /> -->
        <ul>
          <li>添加自定义组件</li>
          <li>拖动或点击左侧组件到编辑框内</li>
        </ul>
        <el-button type="primary" icon="el-icon-plus" plain @click="create()">创建</el-button>
      </div>
    </div>

    <modal
      ref="rename"
      title="重命名"
    />
  </div>
</template>

<script>
import { uuid } from '@/utils/util';
import Modal from '@/components/Modal';
import Eye from '@/components/Eye';
import DraggableMenus from './DraggableMenus';
import EditorPanel from './EditorPanel';

export default {
  props: ['config'],
  components: {
    DraggableMenus,
    EditorPanel,
    Modal,
    Eye,
  },
  mounted() {
    this.init();
  },
  data() {
    return {
      operations: [
        { title: '重命名', icon: 'edit-outline', handler: this.showRenameModal },
        { title: '删除', icon: 'delete', handler: this.remove },
      ],
      current: '', // 当前显示的tab的id
      myMenus: [], // 自定义组件列表
      actives: [], // 打开的tabs列表
      menus: this.prepareMenus(this.config.components),
    };
  },
  methods: {
    init() {
      this.myMenus = this.load();
    },
    save(components) {
      localStorage.setItem('lucy.db', JSON.stringify(this.myMenus));
    },
    load() {
      try {
        return JSON.parse(localStorage.getItem('lucy.db')) || [];
      } catch (err) {
        return [];
      }
    },
    prepareMenus(menus) {
      return Object.entries(
        menus.reduce((p, n) => {
          p[n.tag] = p[n.tag] || [];
          p[n.tag].push(n);
          return p;
        }, {})
      );
    },
    addComponent(item) {
      const idx = this.actives.findIndex(d => d.id === this.current);
      if (idx > -1) {
        this.$refs.editorPanel[idx].add(item);
      }
    },
    create() {
      this.current = uuid();
      const newMenu = {
        id: this.current,
        type: 'view',
        title: `未命名`,
        components: [],
        tag: '自定义组件'
      };
      this.myMenus.push(newMenu);
      this.actives.push(newMenu);
    },
    edit(item) {
      if (!this.actives.find(d => d.id === item.id)) {
        this.actives.push(item);
      }
      this.current = item.id;
    },
    showRenameModal(item) {
      this.$refs.rename.open([{
        title: '名称',
        key: 'title',
        defaultValue: item.title,
      }], (res) => {
        this.rename(item, res);
      });
    },
    rename(item, { title }) {
      // 对象都是引用类型，修改myMenus中的属性，对应actives中的属性也会被修改
      const menu = this.myMenus.find(d => d.id === item.id);
      menu.title = title;
    },
    remove(item) {
      const idx = this.myMenus.findIndex(d => d.id === item.id);
      if (idx > -1) {
        this.myMenus.splice(idx, 1);
      }
      const aIdx = this.actives.findIndex(d => d.id === item.id);
      if (aIdx > -1) {
        this.actives.splice(aIdx, 1);
      }
      if (this.current === item.id && this.actives[0]) {
        this.current = this.actives[0].id;
      }
    },
    close(id) {
      const idx = this.actives.findIndex(d => d.id === id);
      this.actives.splice(idx, 1);
      if (id === this.current && this.actives[0]) {
        this.current = this.actives[0].id;
      }
    },
  }
};
</script>

<style lang="scss" scoped>
.empty {
  text-align: center;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  ul {
    list-style: none;
    padding: 0;
  }
}
.container {
  display: flex;
  height: 100%;
  align-items: stretch;
  .left {
    flex: none;
    width: 256px;
    border-right: 1px solid rgb(224, 224, 224);
    padding: 8px 0;
    overflow: auto;
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
