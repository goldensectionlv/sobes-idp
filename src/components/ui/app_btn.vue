<template>
  <div
      class="btn zoom"
      :style="{
        backgroundColor: b_color,
        borderRadius: border_radius,
        color: color
      }"
      @click="action"
  >
    {{ btn_text }}
  </div>
</template>

<script>
export default {
  props: {
    btn_text: String,
    action: {
      type: Function,
      default: () => {
      }
    },
    b_color: {
      type: String,
      default: 'black'
    },
    border_radius: {
      type: String,
      default: '8px'
    },
    color: {
      type: String,
      default: 'white'
    }
  }
}
</script>

<style scoped>
.btn {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px;
}

.zoom {
  -ms-transform: scale(1.00); /* IE 9 */
  -webkit-transform: scale(1.00); /* Safari 3-8 */
  transform: scale(1.00);
  transition: 200ms ease-out;
}

.zoom:hover {
  -ms-transform: scale(1.01); /* IE 9 */
  -webkit-transform: scale(1.01); /* Safari 3-8 */
  transform: scale(1.01);
  transition: 100ms ease-out;
}
</style>
