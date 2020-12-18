<template>
  <div>
    <h2 class="title">{{ title }}</h2>
    <draggable
      tag="ul"
      class="menu"
      draggable=".draggable"
      :list="dataSource"
      :group="{ name: 'component', pull: 'clone', put: false }"
      :sort="false"
      :clone="prepareClone"
    >
      <li
        v-for="(m, idx) in dataSource"
        :key="idx"
        class="menu-item draggable"
      >
        <a @click="add(m)">{{ m.title }}</a>
        <el-popover
          v-if="addable"
          :visible-arrow="false"
          trigger="click"
          popper-class="no-padding"
        >
          <ul class="context-menu">
            <li><a><i class="el-icon-edit" />&nbsp;&nbsp;编辑</a></li>
            <li><a><i class="el-icon-edit-outline" />&nbsp;&nbsp;重命名</a></li>
            <li><a><i class="el-icon-delete" />&nbsp;&nbsp;删除</a></li>
          </ul>
          <i slot="reference" class="more el-icon-more" />
        </el-popover>
      </li>
      <li v-if="addable" slot="footer" class="menu-item">
        <a class="menu-item-add" @click="$emit('add')"><i class="el-icon-plus" /> 添加</a>
      </li>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import { uuid } from '@/utils/util';

export default {
  props: {
    title: String,
    dataSource: Array,
    addable: {
      type: Boolean,
      default: () => false
    }
  },
  components: {
    draggable
  },
  data() {
    return {
    };
  },
  methods: {
    prepareClone(item) {
      const id = uuid();
      return {
        ...item,
        id,
        key: `${item.type}_${id.substr(0, 4)}`,
      };
    },
    add(item) {
      this.$emit('click', this.prepareClone(item));
    }
  }
};
</script>

<style lang="scss" scoped>
.title {
  padding: 4px 12px 8px 12px;
  font-size: 13px;
  font-weight: normal;
  margin-bottom: 0;
}
.menu {
  position: relative;
  overflow: hidden;
  padding: 0 10px 10px;
  margin: 0;
  flex: auto;
  .menu-item {
    position: relative;
    font-size: 12px;
    display: block;
    text-align: center;
    width: 48%;
    line-height: 28px;
    float: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 1%;
    color: #333;
    a {
      padding: 0 5px;
      display: block;
      cursor: move;
      background: #f4f6fc;
      border: 1px solid #f4f6fc;
      transition: color .4s, border-color .4s;
      &.menu-item-add {
        border:1px dashed #ccc;
        background: transparent;
        cursor: pointer;
        user-select: none;
      }
      &:hover {
        color: #409eff;
        border-color: #409eff;
      }
    }
    .more {
      position: absolute;
      right: 5px;
      top: 9px;
      rotate: 90deg;
      color: #999;
      cursor: pointer;
      opacity: 0;
      transition: opacity .5s;
    }
    &:hover .more {
      opacity: 1;
    }
  }
}
.context-menu {
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    border-bottom: 1px solid #f1f1f1;
    &:last-child {
      border-bottom: none;
    }
    a {
      display: block;
      transition: background-color .5s;
      padding: 5px 10px;
      &:hover {
        background: #f1f1f1;
      }
    }
  }
}
</style>
