<template>
  <div class="video card">
    <div>
      <img
        class="video-thumbnail"
        :src="item.snippet.thumbnails.medium.url"
        alt
      />
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
          <span class="video-meta-viewCount">
            觀看次數：{{ item.statistics.viewCount }}</span
          >
          <br />
          <span class="video-meta-time">{{
            item.contentDetails.duration
          }}</span>
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
  }
};
</script>

<style scoped lang="scss">
.card {
  width: 100%;
}
.video-thumbnail {
  width: 100%;
}
.video-detail {
  display: flex;
  width: 100%;
}
h3 {
  font-weight: normal;
}
.video-title {
  margin-top: 12px;
  margin-bottom: 6px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.channel-thumbnail-wrapper {
  padding-top: 12px;
  padding-right: 12px;
  flex: none;
}
.video-channel-thumbnail {
  border-radius: 50%;
}
.video-meta-time,
.video-meta-viewCount {
  color: #{$text-secondary};
}
.video-text {
  flex: 1;
  padding-right: 24px;
  min-width: 0;
}
.channel-name {
  color: #{$text-secondary};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
