<template>
  <div>
    <el-button @click="visible = true" :icon="value">选择Icon</el-button>

    <el-dialog
      width="75%"
      title="选择图标"
      :visible.sync="visible"
    >
      <el-input v-model="keyword" type="text" suffix-icon="el-icon-search" placeholder="输入关键字进行搜索" />
      <ul class="icon-list">
        <li v-for="icon in icons" :key="icon" @click="handleSelect(icon)">
          <span>
            <i :class="icon" />
            <span class="icon-name">{{ icon }}</span>
          </span>
        </li>
      </ul>
      <span slot="footer">
        <el-button @click="visible = false">关闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import icons from './icons.json';

export default {
  props: [
    'value'
  ],
  data() {
    return {
      keyword: '',
      visible: false,
    };
  },
  computed: {
    icons() {
      return icons.filter(icon => !this.keyword || icon.includes(this.keyword));
    }
  },
  methods: {
    handleSelect(icon) {
      this.$emit('input', icon);
      this.visible = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.icon-list {
  overflow: hidden;
  list-style: none;
  padding: 0!important;
  border: 1px solid #eaeefb;
  border-radius: 4px;
  height: 300px;
  overflow: auto;
  li {
    float: left;
    width: 16.66%;
    text-align: center;
    height: 120px;
    line-height: 120px;
    color: #666;
    font-size: 13px;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    transition: background .2s;
    cursor: pointer;
    &:hover {
      background: #eee;
    }
    span {
      display: inline-block;
      vertical-align: middle;
      line-height: normal;
      color: #99a9bf;
      i {
        display: block;
        font-size: 32px;
        margin-bottom: 15px;
        color: #606266;
        transition: color .15s linear;
      }
      .icon-name {
        display: inline-block;
        padding: 0 3px;
        height: 1em;
      }
    }
  }
}
</style>
