<template>
  <div class="container">
    <div class="left">
      <div v-for="menu in menus" :key="menu[0]">
        <h2>{{ menu[0] }}</h2>
        <draggable
          tag="ul"
          class="menu"
          :list="menu[1]"
          :group="{ name: 'component', pull: 'clone', put: false }"
          :sort="false"
          :clone="prepareClone"
        >
          <li
            v-for="m in menu[1]"
            :key="m.type"
            class="menu-item"
          >
            <a @click="add(m)">{{ m.title }}</a>
          </li>
        </draggable>
      </div>
    </div>
    <div class="content">
      <div class="header">
        <el-button type="text">导入</el-button>
        <el-button type="text">生成JSON</el-button>
      </div>
      <div class="body">
        <div class="empty" v-if="!dataSource.length">从左侧拖拽或点击来添加字段</div>
        <el-form
          v-bind="formConfig"
          :label-width="formConfig.labelWidth || 'auto'"
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
    </div>
    <div class="right">
      <el-tabs v-model="currentConfig" type="border-card">
        <el-tab-pane label="表单配置" name="form">
          <preview
            v-model="formConfig"
            :data-source="formDefines"
          />
          <code><pre>{{ JSON.stringify(formConfig, undefined, 2) }}</pre></code>
          <code><pre>{{ JSON.stringify(dataForm, undefined, 2) }}</pre></code>
          <code><pre>{{ JSON.stringify(dataSource, undefined, 2) }}</pre></code>
        </el-tab-pane>
        <el-tab-pane v-if="current" label="属性配置" name="attr">
          <!-- 使用v-if是为了防止preview渲染的时候因为el-tab-pane导致的显示错误 -->
          <preview
            v-if="currentConfig === 'attr'"
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
      currentConfig: 'form',
      menus: this.prepareMenus(CONFIG.components),
      props: CONFIG.props,
      defines: CONFIG.defines,
      formDefines: CONFIG.form,
      dataSource: [],
      formConfig: {},
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
    prepareMenus(menus) {
      return Object.entries(
        menus.reduce((p, n) => {
          p[n.tag] = p[n.tag] || [];
          p[n.tag].push(n);
          return p;
        }, {})
      );
    },
    prepareClone(item) {
      const id = uuid();
      return {
        id,
        key: `${item.type}_${id.substr(0, 4)}`,
        ...item
      };
    },
    add(item) {
      this.dataSource.push(this.prepareClone(item));
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
    flex: none;
    width: 256px;
    border-right: 1px solid rgb(224, 224, 224);
    padding: 8px 0;
    display: flex;
    flex-direction: column;
    h2 {
      padding: 4px 12px 8px 12px;
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
      height: 40px;
      border-bottom: 1px solid rgb(224, 224, 224);
      background: #fff;
      text-align: right;
      padding: 6px 15px;
    }
    .body {
      flex: auto;
      background: #fff;
      margin: 15px;
      border: 1px solid rgb(214, 214, 214);
      position: relative;
      form {
        height: 100%;
      }
    }
  }
  .right {
    flex: none;
    width: 300px;
    .el-tabs {
      box-shadow: none;
      height: 100%;
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
    text-align: center;
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
      transition: color .4s, border-color .4s;
      &:hover {
        color: #409eff;
        border-color: #409eff;
      }
    }
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
