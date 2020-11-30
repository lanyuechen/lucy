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
            <div
              v-for="c in dataSource"
              :key="c.id"
              :class="{ active: current === c.id }"
              class="form-item"
              @click="current = c.id"
            >
              <form-item
                v-model="dataForm[c.key]"
                :config="c"
                :disabled="c.disabled | calcCondition(dataForm)"
              />

              <div class="option">
                <el-tooltip content="复制">
                  <a @click="copy(c.id)"><i class="el-icon-copy-document" /></a>
                </el-tooltip>
                <el-tooltip content="删除">
                  <a @click="remove(c.id)"><i class="el-icon-delete" /></a>
                </el-tooltip>
              </div>
            </div>
          </draggable>
        </el-form>
      </div>
    </div>
    <div class="right">
      <h2>属性配置</h2>
      <div class="props-content">
        <preview
          v-model="dataSource[currentIdx]"
          :data-source="currentProps"
        />
      </div>
      <code><pre>{{ JSON.stringify(dataSource, undefined, 2) }}</pre></code>
      <code><pre>{{ JSON.stringify(dataForm, undefined, 2) }}</pre></code>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import { uuid, calcCondition } from './util';
import formItem from './form-item';
import preview from './preview';
import CONFIG from './config.json';

export default {
  components: {
    draggable,
    formItem,
    preview
  },
  filters: {
    calcCondition
  },
  data() {
    return {
      current: '',
      menus: CONFIG.components,
      props: CONFIG.props,
      defines: CONFIG.defines,
      dataSource: [],
      dataForm: {}
    }
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
      return props.reduce((p, n) => p.concat(this.defines[n]), []);
    }
  },
  methods: {
    prepareClone(item) {
      const id = uuid();
      return {
        id,
        key: `${item.type}_${id.substr(0, 4)}`,
        ...item
      }
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
}
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
    border-left: 1px solid rgb(224, 224, 224);
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
.props-content {
  padding: 0 12px;
}
.drag-area {
  width: 100%;
  height: 100%;
}
.form-item {
  margin: 2px;
  position: relative;
  border: 1px dashed hsla(0,0%,66.7%,.5);
  background-color: rgba(236,245,255,.3);
  transition: border .6s;
  .option {
    display: none;
    position: absolute;
    right: 0;
    bottom: 0;
    font-size: 12px;
    a {
      margin-right: 5px;
    }
  }
  &:hover {
    border: 1px solid #409eff;
    background-color: rgba(216, 229, 245, 0.4);
    .option {
      display: block;
    }
  }
  // &::after {
  //   content: '';
  //   position: absolute;
  //   left: 0;
  //   top: 0;
  //   width: 100%;
  //   height: 100%;
  //   cursor: move;
  // }
  &.active {
    outline: 2px solid #409eff;
  }
}
</style>
