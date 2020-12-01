<template>
  <div
    class="form-item"
    :class="{ active: active }"
    @click="$emit('click')"
  >

    <slot />

    <div class="option">
      <el-tooltip content="复制">
        <a @click="$emit('copy')"><i class="el-icon-copy-document" /></a>
      </el-tooltip>
      <el-tooltip content="删除">
        <a @click="$emit('remove')"><i class="el-icon-delete" /></a>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'active'
  ],
  data() {
    return {

    };
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
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
