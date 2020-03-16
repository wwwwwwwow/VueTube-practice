<template>
  <div class="list">
    <div class="videos" v-if="items.length">
      <div
        v-for="item in totalItems"
        v-bind:key="item.id"
        class="video-wrapper"
      >
        <Video :item="item" />
      </div>
      <!-- <button @click="pageCallback()">next</button> -->
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
    items: [],
    totalItems: [],
    totalResults: 0,
    count: 0,
    nextPageToken: ""
  }),
  methods: {
    pageCallback() {
      var url =
        "https://www.googleapis.com/youtube/v3/videos?key=AIzaSyCS4UoowPvUTZUp8T3WQH7T_ZD_D1mBQis&part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=12&hl=zh-TW&regionCode=TW&fields=nextPageToken,pageInfo,items(id,snippet(publishedAt,title,thumbnails,channelTitle),contentDetails(duration),statistics(viewCount))";
      if (this.nextPageToken) {
        url = url + "&pageToken=" + this.nextPageToken;
      }

      axios.get(url).then(response => {
        this.res = response.data;
        this.items = response.data.items;
        this.totalItems = this.totalItems.concat(this.items);
        this.totalResults = response.data.pageInfo.totalResults;
        this.nextPageToken = response.data.nextPageToken;
        this.count += 1;
      });
    },
    scroll() {
      window.onscroll = () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;

        let isEnd = this.count * 12 > this.totalResults;
        if (bottomOfWindow && !isEnd) {
          this.pageCallback();
        }
      };
    }
  },
  mounted() {
    this.pageCallback();
    this.scroll();
  },

  components: {
    Video,
    Skeleton
  }
};
</script>

<style scoped lang="scss"></style>
