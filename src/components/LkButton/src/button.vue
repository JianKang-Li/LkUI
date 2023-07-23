<template>
  <button class="btn" :class="{ Btype }">
    <slot></slot>
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
  },
  setup(props) {
    const Btype = ref(props.type);

    return {
      Btype,
    };
  },
};
</script>
<style scoped>
.btn {
  border: 1px solid var(--border);
  border-radius: 0.3rem;
  padding: 0.5rem 1rem;
  background-color: var(--white);
  cursor: pointer;
}

.btn:hover {
  border-color: var(--primary);
  color: var(--primary);
}
</style>
