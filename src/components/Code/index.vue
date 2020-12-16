<template>
  <code><pre>{{ JSON.stringify(json, undefined, 2) }}</pre></code>
</template>

<script>
export default {
  props: ['json'],
};
</script>

<style lang="scss" scoped>
code {
  display: block;
  background: #eee;
  padding: 0 15px;
  overflow: hidden;
}
</style>
