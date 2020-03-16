<template>
  <div>
    <div
      class="overlay"
      :class="{ active: isExpand }"
      @click="isExpand = !isExpand"
    ></div>
    <nav class="nav guide-wrapper" :class="{ active: isExpand }">
      <ul class="guide-box">
        <router-link
          class="guide-item flex-box"
          :class="{ badge: badge.home }"
          to="/home"
        >
          <div class="guide-icon">
            <svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              class="style-scope yt-icon"
              style="pointer-events: none; display: block; width: 100%; height: 100%;"
            >
              <g class="style-scope yt-icon">
                <path
                  d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8"
                  class="style-scope yt-icon"
                />
              </g>
            </svg>
          </div>

          <div class="guide-text">首頁</div>
        </router-link>

        <router-link
          class="guide-item flex-box"
          :class="{ badge: badge.subscription }"
          to="/subscriptions"
        >
          <div class="guide-icon">
            <svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              class="style-scope yt-icon"
              style="pointer-events: none; display: block; width: 100%; height: 100%;"
            >
              <g class="style-scope yt-icon">
                <path
                  d="M18.7 8.7H5.3V7h13.4v1.7zm-1.7-5H7v1.6h10V3.7zm3.3 8.3v6.7c0 1-.7 1.6-1.6 1.6H5.3c-1 0-1.6-.7-1.6-1.6V12c0-1 .7-1.7 1.6-1.7h13.4c1 0 1.6.8 1.6 1.7zm-5 3.3l-5-2.7V18l5-2.7z"
                  class="style-scope yt-icon"
                />
              </g>
            </svg>
          </div>
          <div class="guide-text">訂閱內容</div>
        </router-link>

        <!-- <router-link class="guide-item flex-box" to="/subscriptions">
        <div class="guide-icon">
          <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            class="style-scope yt-icon"
            style="pointer-events: none; display: block; width: 100%; height: 100%;"
          >
            <g class="style-scope yt-icon">
              <path
                d="M18.7 8.7H5.3V7h13.4v1.7zm-1.7-5H7v1.6h10V3.7zm3.3 8.3v6.7c0 1-.7 1.6-1.6 1.6H5.3c-1 0-1.6-.7-1.6-1.6V12c0-1 .7-1.7 1.6-1.7h13.4c1 0 1.6.8 1.6 1.7zm-5 3.3l-5-2.7V18l5-2.7z"
                class="style-scope yt-icon"
              />
            </g>
          </svg>
        </div>
        <div class="guide-text">{{li}}</div>
      </router-link>-->

        <!-- <li class="guide-item"></li> -->
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Nav",
  props: {
    isShow: Boolean
  },
  data: () => ({
    badge: {
      home: false,
      subscription: false
    },
    path: "",
    isExpand: false
  }),
  watch: {
    $route: "switchBadge",
    isShow: "navToogle"
  },
  methods: {
    switchBadge() {
      this.badge.home = false;
      this.badge.subscription = false;
      var pathStr = this.$route.path;
      var path = pathStr.slice(1);
      this.path = path;

      if (path === "home") {
        this.badge.home = true;
      }
      if (path === "subscriptions") {
        this.badge.subscription = true;
      }
    },
    navToogle() {
      this.isExpand = this.isShow;
    }
  },
  mounted() {
    this.switchBadge();
  }
};
</script>

<style scoped lang="scss">
a {
  transition: all 0.3s;
}
a:hover,
.badge {
  background-color: #{$badge-chip-background};

  .guide-icon {
    fill: #{$icon-active};
  }
  .guide-text {
    font-weight: 400;
  }
}
</style>
