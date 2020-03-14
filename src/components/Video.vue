<template>
  <div class="video">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "Video",
  props: {
    msg: String
  }
};
</script>

<style scoped></style>
