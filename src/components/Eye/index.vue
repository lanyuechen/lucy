<template>
  <div class="eyes">
    <div class="eye">
      <div ref="left" class="ball" />
    </div>

    <div class="eye">
      <div ref="right" class="ball" />
    </div>

    <div class="mouse"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.init();
  },
  beforeDestroy() {
    window.removeEventListener('mousemove', this.handleMousemove);
  },
  methods: {
    init() {
      window.addEventListener('mousemove', this.handleMousemove);
    },
    handleMousemove(e) {
      const x = e.clientX * 100 / window.innerWidth + "%";
      const y = e.clientY * 100 / window.innerHeight + "%";

      this.$refs.left.style.left = x;
      this.$refs.left.style.top = y;
      this.$refs.left.style.transform = `translate(-${x}, -${y})`;

      this.$refs.right.style.left = x;
      this.$refs.right.style.top = y;
      this.$refs.right.style.transform = `translate(-${x}, -${y})`;
    }
  }
};
</script>

<style lang="scss" scoped>
.eyes{
  width: 100%;
  text-align: center;
}
.eye{
  width: 6em;
  height: 6em;
  background: #fff;
  display: inline-block;
  margin: 20px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
}

.ball{
  width: 2em;
  height: 2em;
  background: #000;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  border-radius: 50%; 
}
.mouse {
  width: 100px;
  height: 6px;
  background: #000;
  margin: auto;
  border-radius: 3px;
}
</style>
