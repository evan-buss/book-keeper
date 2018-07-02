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
@import "style";
@import url("https://fonts.googleapis.com/css?family=Fira+Sans");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");

#app {
  font-family: "Fira Sans", "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
