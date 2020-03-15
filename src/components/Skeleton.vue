<template>
  <div class="Skeleton card">
    <div class="video-thumbnail skeleton"></div>
    <div class="video-detail">
      <div class="channel-thumbnail-wrapper">
        <div class="video-channel-thumbnail skeleton"></div>
      </div>
      <div class="video-text">
        <div class="video-title skeleton"></div>
        <div class="channel-name skeleton"></div>
        <div class="video-meta">
          <div class="video-meta-viewCount skeleton"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skeleton",
  props: {
    item: Object
  }
};
</script>

<style scoped lang="scss">
$text-height: 2rem;

.card {
  width: 100%;
}

.video-thumbnail {
  width: 100%;
  height: 0;
  padding-bottom: 55%;
}
.video-detail {
  display: flex;
  width: 100%;
}

.video-title {
  margin-top: 12px;
  margin-bottom: 6px;
  width: 80%;
  height: 2rem;
}
.channel-thumbnail-wrapper {
  padding-top: 12px;
  padding-right: 12px;
  flex: none;
}
.video-channel-thumbnail {
  border-radius: 60%;
  width: 36px;
  height: 36px;
}
.video-meta-time,
.video-meta-viewCount {
  width: 40%;
  height: 1.1rem;
}
.video-text {
  flex: 1;
  padding-right: 24px;
  min-width: 0;
}
.channel-name {
  width: 70%;
  height: 1.2rem;
}

.skeleton {
  background-color: #{$badge-chip-background};
  margin-bottom: 12px;
  // margin-top: 8px;
  position: relative;
  overflow: hidden;
  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(rgb(107, 107, 107), 0) 0,
      rgba(rgb(107, 107, 107), 0.2) 20%,
      rgba(rgb(107, 107, 107), 0.4) 60%,
      rgba(rgb(107, 107, 107), 0)
    );
    animation: loading 1.5s infinite;
    content: "";
  }
  @keyframes loading {
    100% {
      transform: translateX(100%);
    }
  }
}
</style>
