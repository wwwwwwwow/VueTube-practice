<template>
  <div class="watch ">
    <div class="video card" v-if="item.id">
      <div class="">
        <!-- <img
        class="video-thumbnail"
        :src="item.snippet.thumbnails.maxres.url"
        alt
      /> -->
        <div class="thumbnail-wrapper">
          <iframe
            class="video-thumbnail"
            width="560"
            height="315"
            :src="`https://www.youtube.com/embed/` + item.id"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div class="video-meta-time">
          {{ durationFormat }}
        </div>
      </div>
      <div class="video-detail">
        <div class="channel-thumbnail-wrapper">
          <img
            id="img"
            class="video-channel-thumbnail"
            alt
            width="36"
            src="https://yt3.ggpht.com/a/AATXAJzWZS_SX-hEpjcoXGbkRi6rfI4RwYKxg4nL0w=s288-c-k-c0xffffffff-no-rj-mo"
          />
        </div>
        <div class="video-text">
          <h3 class="video-title">{{ item.snippet.title }}</h3>
          <div class="channel-name">{{ item.snippet.channelTitle }}</div>
          <div class="video-meta">
            <span class="video-meta-viewCount"
              >觀看次數：{{ item.statistics.viewCount }}</span
            >
          </div>
          <!-- <div class="video-meta"> -->
          <!-- <span class="video-meta-viewCount">{{ttt}}</span> -->
          <!-- contentDetails.duration -->
          <!-- </div> -->
        </div>
      </div>
    </div>
    <div v-else>
      <div class="thumbnail-wrapper">
        <iframe
          class="video-thumbnail"
          width="560"
          height="315"
          :src="`https://www.youtube.com/embed/` + $route.params.id"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
// import Video from "@/components/Video.vue";

export default {
  name: "Watch",
  props: {
    msg: String
  },
  data: () => ({
    item: {}
  }),
  computed: {
    durationFormat: function() {
      return this.formatDuration(this.item.contentDetails.duration);
    }
  },
  methods: {
    formatDuration(duration) {
      const reptms = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/;
      let hours = 0;
      let minutes = 0;
      let seconds = 0;
      const timeBase = 10;
      if (reptms.test(duration)) {
        const matches = reptms.exec(duration);
        if (matches[1]) hours = Number(matches[1]);
        if (matches[2]) minutes = Number(matches[2]);
        if (matches[3]) seconds = Number(matches[3]);
      }
      if (hours < timeBase) {
        hours = `0${hours}`;
      }
      if (minutes < timeBase) {
        minutes = `0${minutes}`;
      }
      if (seconds < timeBase) {
        seconds = `0${seconds}`;
      }
      if (hours === "00") return `${minutes}:${seconds}`;
      return `${hours}:${minutes}:${seconds}`;
    }
  },
  mounted() {
    this.item = this.$route.params;
  },
  components: {
    // Video
  }
};
</script>

<style scoped lang="scss">
.thumbnail-wrapper {
  width: 100%;
  height: 0;
  padding-bottom: 55%;
}
.video-thumbnail {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
</style>
