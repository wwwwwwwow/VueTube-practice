<template>
  <div class="subscription">
    <div class="list">
      <div class="videos" v-if="items.length">
        <div v-for="item in items" v-bind:key="item.id" class="video-wrapper">
          <Video :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Video from "@/components/Video.vue";

export default {
  name: "Subscription",
  props: {
    msg: String
  },
  data: () => ({
    heartMap: {},
    items: []
  }),
  mounted() {
    const vm = this;
    vm.$bus.$on("delete", () => {
      vm.fetchLocalData();
    });

    this.fetchLocalData();
  },
  methods: {
    fetchLocalData() {
      this.$nextTick(function() {
        this.items = [];
        this.heartMap =
          JSON.parse(window.localStorage.getItem("heartMap")) || {};
        for (let key in this.heartMap) {
          if (this.heartMap[key]) {
            let item = JSON.parse(window.localStorage.getItem(key));
            this.items.push(item);
          }
        }
      });
    }
  },
  components: {
    Video
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
