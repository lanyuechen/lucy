<template>
  <div>
    <h2 class="title">{{ title }}</h2>
    <draggable
      tag="ul"
      class="menu"
      :list="dataSource"
      :group="{ name: 'component', pull: 'clone', put: false }"
      :sort="false"
      :clone="prepareClone"
    >
      <li
        v-for="m in dataSource"
        :key="m.type"
        class="menu-item"
      >
        <a @click="add(m)">{{ m.title }}</a>
      </li>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import { uuid } from './util';

export default {
  props: ['title', 'dataSource'],
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
</style>
