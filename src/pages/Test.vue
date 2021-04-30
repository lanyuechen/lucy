<template>
  <div>
    <!-- <viewer
      :data-source="components"
      :value="value"
      theme="mini"
      @input="(val) => handleChange(val)"
    />
    <Code :json="value" /> -->
    <h2>用户引导Demo</h2>
    <div
      data-id="step0"
      style="background: lightblue; width: 200px; height: 30px; text-align: center; line-height: 30px;"
      @click="alert('点击第1步')"
    >
      第1步
    </div>

    <div
      data-id="step1"
      style="background: lightgreen; position: absolute; left: 200px; top: 200px; width: 200px; height: 30px; text-align: center; line-height: 30px;"
      @click="alert('点击第2步')"
    >
      第2步
    </div>

    <div
      data-id="step2"
      style="background: lightcoral; position: absolute; left: 0px; top: 400px; width: 200px; height: 200px; text-align: center; line-height: 200px;"
      @click="alert('点击第3步')"
    >
      第3步
    </div>

    <div
      data-id="step3"
      style="background: lightcyan; position: absolute; left: 600px; top: 200px; width: 200px; height: 200px; text-align: center; line-height: 200px;"
      @click="alert('点击第4步')"
    >
      第4步
    </div>
  </div>
</template>

<script>
import '@/utils/guide';
import reference from '@/config/reference.yaml';
import Code from '@/components/Code';
import { prepareComponents } from '@/utils/prepare-config';
export default {
  components: {
    Code,
  },
  data() {
    return {
      value: {},
      components: prepareComponents(Object.values(reference)),
    };
  },
  methods: {
    alert(txt) {
      alert(txt);
    },
    handleChange(val) {
      this.value = val;
    }
  }
};
</script>

<style scoped>

</style>
