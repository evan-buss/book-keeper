<template>
<section class="hero is-fullheight is-primary is-bold">
  <div class="hero-head">
    <NavBar></NavBar>
    <h1 class="title is-1">
      About the Project
    </h1>
  </div>

  <div class="hero-body">
    <div class="container">
      <p class="has-text-light subtitle is-2 has-text-dark">This is a project for me to learn web development.</p><br>
      <h2 class="title is-2">
        Technology Used:
      </h2>
      <ul class="subtitle is-3 has-text-dark">
        <li>Vue.JS</li>
        <li>Bulma CSS Library</li>
        <li>FireBase</li>
      </ul>
    </div>
  </div>
</section>
</template>

<script>
import NavBar from "../components/NavBar";

export default {
  name: "About",
  components: { NavBar }
};
</script>

<style scoped>
h2.title.is-2 {
  text-decoration: underline;
  margin-bottom: 30px;
}
h1.title.is-1 {
  text-decoration: underline;
  margin-bottom: 0;
}
</style>