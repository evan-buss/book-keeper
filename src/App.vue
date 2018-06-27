<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>




<style lang="scss">
/* Bulma CSS Library Modular Imports */
@import "../node_modules/bulma/sass/utilities/_all";
@import "../node_modules/bulma/sass/base/_all.sass";
@import "../node_modules/bulma/sass/layout/hero.sass";
@import "../node_modules/bulma/sass/layout/section.sass";
@import "../node_modules/bulma/sass/grid/columns.sass";
@import "../node_modules/bulma/sass/elements/button.sass";
@import "../node_modules/bulma/sass/elements/container.sass";
@import "../node_modules/bulma/sass/elements/content.sass";
@import "../node_modules/bulma/sass/elements/form.sass";
@import "../node_modules/bulma/sass/elements/icon.sass";
@import "../node_modules/bulma/sass/elements/image.sass";
@import "../node_modules/bulma/sass/elements/notification.sass";
@import "../node_modules/bulma/sass/elements/progress.sass";
@import "../node_modules/bulma/sass/elements/table.sass";
@import "../node_modules/bulma/sass/elements/title.sass";
@import "../node_modules/bulma/sass/components/card.sass";
@import "../node_modules/bulma/sass/components/message.sass";
@import "../node_modules/bulma/sass/components/modal.sass";
@import "../node_modules/bulma/sass/components/navbar.sass";

/* TODO: Figure out the deprecation warning solution */
@import "../node_modules/animate.css/animate";

@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");

@import url("https://fonts.googleapis.com/css?family=Fira+Sans");

#app {
  font-family: "Fira Sans", "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
