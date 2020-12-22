<template>
  <div class="container">
    <div class="left">
      <div class="header">
        <el-button type="text">导入</el-button>
        <el-button type="text" @click="previewVisible = true">预览</el-button>
        <el-button type="text" @click="$emit('save', dataSource)">保存</el-button>
      </div>
      <el-tabs v-model="mainTab" tab-position="bottom" type="border-card">
        <el-tab-pane label="编辑" name="editor">
          <editor
            :current.sync="current"
            :data-source="dataSource"
            :form-data="formData"
            :form-config="formConfig"
            @click="(c) => current = c.id"
          />
        </el-tab-pane>
        <el-tab-pane label="预览" name="viewer">
          <viewer
            v-if="mainTab === 'viewer'"
            v-model="formData"
            :data-source="dataSource"
            :form-config="formConfig"
          />
        </el-tab-pane>
        <el-tab-pane label="代码" name="coder">
          <Code :json="dataSource" />
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="right">
      <el-tabs v-model="currentConfig" tab-position="bottom" type="border-card">
        <el-tab-pane label="表单配置" name="form">
          <viewer
            v-model="formConfig"
            :data-source="config.form"
          />
          <code><pre>{{ JSON.stringify(formData, undefined, 2) }}</pre></code>
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
import FormBox from '@/components/FormBox';
import Editor from '@/components/Editor';
import Code from '@/components/Code';
import ModalPreview from './ModalPreview';

export default {
  props: ['dataSource', 'config'],
  components: {
    FormBox,
    Editor,
    ModalPreview,
    Code,
  },
  data() {
    return {
      current: '',
      mainTab: 'editor',
      currentConfig: 'form',
      formConfig: {},
      formData: {},
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
      const props = this.config.components.find(d => d.type === c.type).props || [];
      return this.config.reference.filter(d => props.includes(d.tag));
    }
  },
  methods: {
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
    flex: auto;
    background: rgb(250, 250, 250);
    display: flex;
    flex-direction: column;
    &>>>.el-tabs {
      height: 100%;
      box-shadow: none;
      border: none;
      .el-tabs__content {
        height: calc(100% - 49px);
        padding: 15px;
        .el-tab-pane {
          height: 100%;
        }
      }
    }
    form {
      height: 100%;
    }
    .header {
      height: 40px;
      border-bottom: 1px solid rgb(224, 224, 224);
      background: #fff;
      text-align: right;
      padding: 6px 15px;
    }
  }
  .right {
    flex: none;
    width: 300px;
    border-left: 1px solid rgb(224, 224, 224);
    &>>>.el-tabs {
      box-shadow: none;
      height: 100%;
      .el-tabs__content {
        height: calc(100% - 49px);
        padding: 15px;
        .el-tab-pane {
          height: 100%;
        }
      }
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