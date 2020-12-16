<template>
  <div>
    <h2 class="title">{{ title }}</h2>
    <draggable
      tag="ul"
      class="menu"
      draggable="draggable"
      :list="dataSource"
      :group="{ name: 'component', pull: 'clone', put: false }"
      :sort="false"
      :clone="prepareClone"
    >
      <li
        v-for="m in dataSource"
        :key="m.type"
        class="menu-item draggable"
      >
        <a @click="add(m)">{{ m.title }}</a>
      </li>
      <li v-if="addable" slot="footer" class="menu-item">
        <a class="menu-item-add">添加</a>
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
        id,
        key: `${item.type}_${id.substr(0, 4)}`,
        ...item
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
        border:1px dashed #409eff;
        background: transparent;
        cursor: pointer;
        user-select: none;
      }
      &:hover {
        color: #409eff;
        border-color: #409eff;
      }
    }
  }
}
</style>
