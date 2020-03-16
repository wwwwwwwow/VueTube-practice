<template>
  <div class="video card">
    <div class="thumbnail-wrapper">
      <img
        class="video-thumbnail"
        :src="item.snippet.thumbnails.medium.url"
        alt
      />
      <div class="video-meta-time">
        {{ durationFormat }}
      </div>
      <div class="thumbnail-overlay">
        <div
          class="heart"
          :class="{ active: isFavorite }"
          @click="heartClick()"
        >
          <svg
            class="heart-icon"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 51.997 51.997"
          >
            <path
              d="M51.911,16.242C51.152,7.888,45.239,1.827,37.839,1.827c-4.93,0-9.444,2.653-11.984,6.905
	c-2.517-4.307-6.846-6.906-11.697-6.906c-7.399,0-13.313,6.061-14.071,14.415c-0.06,0.369-0.306,2.311,0.442,5.478
	c1.078,4.568,3.568,8.723,7.199,12.013l18.115,16.439l18.426-16.438c3.631-3.291,6.121-7.445,7.199-12.014
	C52.216,18.553,51.97,16.611,51.911,16.242z"
            />
          </svg>
          <div class="center animation-container">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <clipPath id="clip-path">
                <path
                  class="ring"
                  d="M 50 36 A 14 14 0 1 0 50 64 A 14 14 0 1 0 50 36 Z M 50 43 A 7 7 0 1 1 50 57 A 7 7 0 1 1 50 43 Z"
                />
              </clipPath>
              <g class="lines" clip-path="url(#clip-path)">
                <line x1="50" y1="0" x2="50" y2="35" />
                <line x1="93.301" y1="25" x2="62.99" y2="42.5" />
                <line x1="93.301" y1="75" x2="62.99" y2="57.5" />
                <line x1="50" y1="100" x2="50" y2="65" />
                <line x1="6.699" y1="75" x2="37.01" y2="57.5" />
                <line x1="6.699" y1="25" x2="37.01" y2="42.5" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="video-detail" @click="goWatch()">
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
</template>

<script>
export default {
  name: "Video",
  props: {
    item: Object
  },
  data: () => ({
    isFavorite: false
  }),
  computed: {
    durationFormat: function() {
      return this.formatDuration(this.item.contentDetails.duration);
    }
  },
  methods: {
    goWatch() {
      this.$router.push({ name: "watch", params: this.item });
      // this.$router.push({ path: "watch", query: { v: this.item.id } });
    },
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
    },
    heartClick() {
      this.isFavorite = !this.isFavorite;
      var key = this.item.id;
      var value = JSON.stringify(this.item);

      if (this.isFavorite) {
        window.localStorage.setItem(key, value);
      } else {
        this.$bus.$emit("delete");
        window.localStorage.removeItem(key);
      }

      var heartMap = JSON.parse(window.localStorage.getItem("heartMap")) || {};
      // console.log("heartMap", heartMap);

      heartMap[key] = this.isFavorite;

      window.localStorage.setItem("heartMap", JSON.stringify(heartMap));
    }
  },
  mounted() {
    var key = this.item.id;
    var alreadyFavorite = !!window.localStorage.getItem(key);
    this.isFavorite = alreadyFavorite;
  }
};
</script>

<style scoped lang="scss"></style>
