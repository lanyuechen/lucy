<template>
  <div style="overflow: hidden;">
    <draggable
      :list="components"
      :animation="200"
      ghost-class="ghost"
      group="component"
      class="drag-area"
      tag="el-row"
    >
      <el-col
        v-for="c in components"
        :key="c.id"
        :span="12"
      >
        <form-box>
          <form-item
            v-model="value[c.key]"
            :config="c"
          />
        </form-box>
      </el-col>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import FormBox from '@/components/FormBox';

export default {
  components: {
    draggable,
    FormBox,
  },
  props: {
    components: {
      type: Array,
      default: () => []
    },
    value: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {

    };
  },
  methods: {

  }
};
</script>

<style lang="scss" scoped>

</style>
