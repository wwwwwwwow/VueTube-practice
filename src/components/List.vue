<template>
  <div class="list">
    <div class="videos" v-if="items.length">
      <div v-for="item in items" v-bind:key="item.id" class="video-wrapper">
        <Video :item="item" />
      </div>
    </div>
    <div class="videos" v-else>
      <Skeleton v-for="n in 12" :key="n" class="video-wrapper" />
    </div>
  </div>
</template>

<script>
import Video from "@/components/Video.vue";
import Skeleton from "@/components/Skeleton.vue";
import axios from "axios";

export default {
  name: "List",
  data: () => ({
    res: {},
    items: {}
  }),
  mounted() {
    axios
      .get(
        "https://www.googleapis.com/youtube/v3/videos?key=AIzaSyCS4UoowPvUTZUp8T3WQH7T_ZD_D1mBQis&part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=12&hl=zh-TW&regionCode=TW&fields=nextPageToken,pageInfo,items(id,snippet(publishedAt,title,thumbnails,channelTitle),contentDetails(duration),statistics(viewCount))"
      )
      .then(response => {
        this.res = response.data;
        this.items = response.data.items;
      });
  },

  components: {
    Video,
    Skeleton
  }
};
</script>

<style scoped lang="scss">
// .videos {
// display: flex;
// flex-wrap: wrap;
// }
.video-wrapper {
  width: 24%;
  padding: 0 8px 40px;
  display: inline-block;
}

// Large devices (desktops, less than 1200px)
@media (max-width: 1199.98px) {
  .video-wrapper {
    width: 33%;
  }
}

// Medium devices (tablets, less than 992px)
@media (max-width: 991.98px) {
}

// Small devices (landscape phones, less than 768px)
@media (max-width: 767.98px) {
  .video-wrapper {
    width: 50%;
  }
}

// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) {
}
</style>
