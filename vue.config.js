module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/VueTube-practice/" : "/",
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/css/app.scss";`
      }
    }
  }
};
