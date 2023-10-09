<template>
  <div v-for="(item,index) in rOptions" :key="index">
    <input type="radio" :value="item.value"><span>{{ item.label }}</span>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  name: "LkGroup",
  props: {
    type: {
      type: String,
      default: "plain",
    },
    options: {
      type: Array,
      default: ()=> []
    }
  },
  setup(props) {
    const rOptions = ref(props.options)

    return {
      rOptions
    }
  },
};
</script>
<style scoped></style>
