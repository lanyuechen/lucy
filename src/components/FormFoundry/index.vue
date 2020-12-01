<template>
  <div class="container">
    <div class="left">
      <h2>基础字段</h2>
      <draggable
        tag="ul"
        class="menu"
        :list="menus"
        :group="{ name: 'component', pull: 'clone', put: false }"
        :sort="false"
        :clone="prepareClone"
      >
        <li
          v-for="menu in menus"
          :key="menu.type"
          class="menu-item"
        >
          <a>{{ menu.title }}</a>
        </li>
      </draggable>
    </div>
    <div class="content">
      <div class="header">
        head
      </div>
      <div class="body">
        <el-form label-width="auto">
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
    </div>
    <div class="right">
      <!-- <h2>属性配置</h2> -->
      <el-tabs v-model="currentConfig" type="border-card">
        <el-tab-pane label="表单配置" name="form">
          <code><pre>{{ JSON.stringify(dataForm, undefined, 2) }}</pre></code>
          <code><pre>{{ JSON.stringify(dataSource, undefined, 2) }}</pre></code>
        </el-tab-pane>
        <el-tab-pane label="属性配置" name="attr">
          <preview
            v-model="dataSource[currentIdx]"
            :data-source="currentProps"
          />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import { uuid, calcCondition } from './util';
import CONFIG from './config.json';
import FormBox from '@/components/FormBox';

export default {
  components: {
    draggable,
    FormBox
  },
  filters: {
    calcCondition
  },
  data() {
    return {
      current: '',
      currentConfig: 'attr',
      menus: CONFIG.components,
      props: CONFIG.props,
      defines: CONFIG.defines,
      dataSource: [],
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
    prepareClone(item) {
      const id = uuid();
      return {
        id,
        key: `${item.type}_${id.substr(0, 4)}`,
        ...item
      };
    },
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
.container {
  display: flex;
  height: 100%;
  align-items: stretch;
  .left {
    width: 256px;
    border-right: 1px solid rgb(224, 224, 224);
    padding: 8px 0;
    display: flex;
    flex-direction: column;
    &>h2 {
      padding: 8px 12px;
      font-size: 13px;
      font-weight: normal;
      margin-bottom: 0;
    }
  }
  .content {
    flex: auto;
    background: rgb(250, 250, 250);
    display: flex;
    flex-direction: column;
    .header {
      height: 45px;
      border-bottom: 1px solid rgb(224, 224, 224);
      background: #fff;
    }
    .body {
      flex: auto;
      background: #fff;
      margin: 15px;
      border: 1px solid rgb(214, 214, 214);
      form {
        height: 100%;
      }
    }
  }
  .right {
    width: 300px;
    .el-tabs {
      box-shadow: none;
      height: 100%;
    }
    .el-tabs__item {
      height: 45px;
      line-height: 45px;
    }
    &>h2 {
      padding: 8px 12px;
      font-size: 13px;
      font-weight: normal;
      margin-bottom: 0;
    }
  }
}
.menu {
  position: relative;
  overflow: hidden;
  padding: 0 10px 10px;
  margin: 0;
  flex: auto;
  .menu-item {
    font-size: 12px;
    display: block;
    width: 48%;
    line-height: 26px;
    position: relative;
    float: left;
    left: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 1%;
    color: #333;
    border: 1px solid #f4f6fc;
    a {
      padding: 0 5px;
      display: block;
      cursor: move;
      background: #f4f6fc;
      border: 1px solid #f4f6fc;
    }
  }
}
.drag-area {
  width: 100%;
  height: 100%;
}
</style>
