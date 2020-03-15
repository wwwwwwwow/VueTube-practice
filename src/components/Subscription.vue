<template>
  <div class="subscription">
    <h3>訂閱</h3>
    <router-link to="/home">home</router-link>
  </div>
</template>

<script>
export default {
  name: "Subscription",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
