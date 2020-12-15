<template>
  <div class="container">
    <div class="left">
      <draggable-menus
        v-for="menu in menus"
        :key="menu[0]"
        :title="menu[0]"
        :data-source="menu[1]"
        @click="add"
      />

      <draggable-menus
        title="自定义组件"
        :data-source="customComponents"
        @click="add"
      />
    </div>
    <div class="content">
      <div class="header">
        <el-button type="text">导入</el-button>
        <el-button type="text">生成JSON</el-button>
        <el-button type="text">保存为组件</el-button>
      </div>
      <div class="body">
        <form-editor
          :current="current"
          :data-source="dataSource"
          :data-form="dataForm"
          @click="(c) => current = c ? c.id : ''"
        />
      </div>
    </div>
    <div class="right">
      <el-tabs v-model="currentConfig" type="border-card">
        <el-tab-pane label="表单配置" name="form">
          <viewer
            v-model="formConfig"
            :data-source="formDefines"
          />
          <code><pre>{{ JSON.stringify(formConfig, undefined, 2) }}</pre></code>
          <code><pre>{{ JSON.stringify(dataForm, undefined, 2) }}</pre></code>
          <code><pre>{{ JSON.stringify(dataSource, undefined, 2) }}</pre></code>
        </el-tab-pane>
        <el-tab-pane v-if="current" label="属性配置" name="attr">
          <!-- 使用v-if是为了防止view渲染的时候因为el-tab-pane导致的显示错误 -->
          <viewer
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
import FormBox from '@/components/FormBox';
import FormEditor from '@/components/FormEditor';
import DraggableMenus from './DraggableMenus';
import { calcCondition } from './util';
import CONFIG from './config.json';

export default {
  components: {
    draggable,
    FormBox,
    FormEditor,
    DraggableMenus
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
      customComponents: [],
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
    init() {
      this.customComponents = [];
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
    add(item) {
      this.dataSource.push(item);
    },
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
</style>
