<template>
  <div
    class="components__cell"
    :class="{'Xplayer': value == 'X', 'Oplayer': value == 'O',}"
    @click="$emit('click')"
  >
    <span>
      {{ value }}
    </span>
  </div>
</template>

<script>
export default {
  name: "Cell",
  props: {
    isLastRow: {
      type: Boolean,
      required: false,
      default: false,
    },
    isLastColumn: {
      type: Boolean,
      required: false,
      default: false,
    },
    value: {
      type: String,
      required: false,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
$borderStyle: 1px solid grey;
.Xplayer {
  background-color: blue;
}
.Oplayer {
  background-color: red;
}
.components__cell {
  /* background-color: coral; */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 60px;
  height: 60px;
  padding: 5px;
  border-top: $borderStyle;
  border-left: $borderStyle;

  &.last-row {
    border-bottom: $borderStyle;
  }

  &.last-column {
    border-right: $borderStyle;
  }
}
</style>