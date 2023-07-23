<template>
  <button
    :class="[
      'lkbtn',
      type,
      {
        circle: Bcircle,
      },
    ]"
  >
    <span><slot></slot></span>
    <slot name="add"></slot>
  </button>
</template>
<script>
import { ref } from "vue";
export default {
  name: "LkButton",
  props: {
    type: {
      type: String,
      default: "",
    },
    circle: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const Btype = ref(props.type);
    const Bcircle = ref(props.circle);

    return {
      Btype,
      Bcircle,
    };
  },
};
</script>
<style scoped></style>
