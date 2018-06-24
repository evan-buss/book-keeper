<template>
  <section class="hero is-fullheight is-primary is-bold">

    <!-- Hero-Head -->
    <div class="hero-head">
      <NavBar></NavBar>
    </div>

    <!-- Hero-Body -->
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-2">
          Welcome to the Book Keeper
        </h1>
        <h2 class="title is-spaced is-2">
          <!-- <span class="icon has-text-dark">
            <i class="fa fa-book"></i>
          </span> -->
            <p>
              👁
              <span class="icon has-text-dark">
                <i class="fa fa-book"></i>
              </span> 👁 <br>
              💧👄💧
            </p>
        </h2>
        <h3 class="subtitle is-spaced is-3 has-text-dark">
          A project by <a class="has-text-light" href="https://github.com/evan-buss/book-list"><em>Evan Buss</em></a>
        </h3>

      </div>
    </div>
  </section>
</template>

<script>
import NavBar from "../components/NavBar";

export default {
  name: "Home",
  components: {
    NavBar
  }
};
</script>

<style scoped>
em:hover {
  text-decoration: line-through;
  color: #00d8ff;
}
</style>
