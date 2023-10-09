<template>
  <LkRadio :options="options"></LkRadio>
</template>
<script>
export default {
  setup() {
    const options = [{
      value:1,
      label: 1
    },
    {
      value:2,
      label: 2
    }]

    return {
      options
    }
  },
};
</script>
<style scoped></style>
