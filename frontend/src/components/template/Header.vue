<template>
  <header class="header"></header>
</template>

<script>
export default {
  name: "Header",
  props: {}
};
</script>

<style>
.header {
  grid-area: header;
  background: linear-gradient(to right, #1e469a, #49a7c1);

  display: flex;
  justify-content: center; /* main axis */
  align-items: center; /* cross axis */
}
</style>