<template>
  <div class="container">
    <div class="left">
      <draggable-menus
        title="自定义组件"
        :data-source="customComponents"
        @click="add"
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
      <div class="header">
        <el-button type="text">导入</el-button>
        <el-button type="text" @click="previewVisible = true">预览</el-button>
        <el-button type="text" @click="save">保存</el-button>
      </div>
      <div class="body">
        <el-tabs v-model="mainTab" tab-position="bottom" type="border-card">
          <el-tab-pane label="编辑" name="editor">
            <editor
              :current.sync="current"
              :data-source="dataSource"
              :data-form="dataForm"
              :form-config="formConfig"
              @click="(c) => current = c.id"
            />
          </el-tab-pane>
          <el-tab-pane label="预览" name="viewer">
            <viewer
              v-if="mainTab === 'viewer'"
              v-model="dataForm"
              :data-source="dataSource"
              :form-config="formConfig"
            />
          </el-tab-pane>
          <el-tab-pane label="代码" name="coder">
            <Code :json="dataSource" />
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <div class="right">
      <el-tabs v-model="currentConfig" type="border-card">
        <el-tab-pane label="表单配置" name="form">
          <viewer
            v-model="formConfig"
            :data-source="formDefines"
          />
          <code><pre>{{ JSON.stringify(dataForm, undefined, 2) }}</pre></code>
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

    <modal-preview
      :visible.sync="previewVisible"
      :data-source="dataSource"
      :form-config="formConfig"
    />

  </div>
</template>

<script>
import draggable from 'vuedraggable';
import FormBox from '@/components/FormBox';
import Editor from '@/components/Editor';
import Code from '@/components/Code';
import DraggableMenus from './DraggableMenus';
import ModalPreview from './ModalPreview';

export default {
  props: ['config'],
  components: {
    draggable,
    FormBox,
    Editor,
    DraggableMenus,
    ModalPreview,
    Code,
  },
  data() {
    return {
      menus: this.prepareMenus(this.config.components),
      props: this.config.props,
      defines: this.config.defines,
      formDefines: this.config.form,

      current: '',
      mainTab: 'editor',
      currentConfig: 'form',
      dataSource: [],
      customComponents: [],
      formConfig: {},
      dataForm: {},
      previewVisible: false,
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
      position: relative;
      form {
        height: 100%;
      }
      &>>>.el-tabs {
        height: 100%;
        box-shadow: none;
        border: none;
        .el-tabs__content {
          height: calc(100% - 49px);
          .el-tab-pane {
            height: 100%;
          }
        }
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
