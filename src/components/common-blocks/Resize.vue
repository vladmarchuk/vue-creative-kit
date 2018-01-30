<template>
    <div :style="{fontSize: fSize + 'px'}">
        <slot></slot>
    </div>
</template>

<script>
const defaultWidth = 1366;
const defaultFont = 16;
const minWidth = 768;
const minHeight = 400;
const defaultHeight = 768;

export default {
  name: 'Resize',
  mounted() {
    window.addEventListener('resize', this.onResize.bind(this));
    this.$root.$emit('onResize');
  },
  data() {
    return {
      vW: window.innerWidth,
      vH: window.innerHeight,
    };
  },
  computed: {
    fSize() {
      let fSize = 16;
      if (!this.$root.isMobile) {
        fSize =
          defaultFont *
          Math.min(
            Math.max(minWidth, this.vW) / defaultWidth,
            Math.max(minHeight, this.vH) / defaultHeight,
          );
      }
      return fSize;
    },
  },
  methods: {
    onResize() {
      this.$root.$emit('onResize');
      this.vW = window.innerWidth;
      this.vH = window.innerHeight;
    },
  },
};
</script>

