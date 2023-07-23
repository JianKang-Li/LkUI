<template>
  <h1>Welecome to LkUI</h1>
  <LkButton>primary</LkButton>
  <LkButton type="danger">danger</LkButton>
  <LkButton type="success"
    >success <template #add><span>rpx</span></template></LkButton
  >

  <LkButton circle @click="handleCilck">1</LkButton>
</template>
<script>
export default {
  setup() {
    const handleCilck = (e) => {
      console.log(e.target);
    };

    return {
      handleCilck,
    };
  },
};
</script>
<style scoped></style>
