<template>
<section class="hero is-fullheight is-primary is-bold">
  <div class="hero-head">
    <NavBar></NavBar>
  </div>

  <div class="hero-body">
    <div class="section">
        <div class="my-content content is-medium">
          <h1>
            About the Project
          </h1>
          <p class="has-text-left">
            Book Keeper is a Single Page Application (SPA) designed to let you
            keep track of books you've read. After adding a book you can rate it
            and write a note about it.
          </p>
          <h1>
            Motivations
          </h1>
          <p class="has-text-left">This was a project for me to learn the basics of web development
            beyond the basic static sites that I had written before. Using Vue.js
            to create reactive front-end components and firebase for a serverless
            backend, I learned a lot more about what the creation of modern web applications.
          </p>
          <h2>
            Technologies
          </h2>
          <ul class="has-text-left">
            <li>Vue.js
              <ul>
                <li>Javascript framework for building user interfaces</li>
              </ul>
            <li>Bulma CSS Library</li>
              <ul>
                <li>CSS framework based on flexbox</li>
              </ul>
            <li>FireBase</li>
              <ul>
                <li>Serverless back-end that handles databases, authentication, and storage among other things.</li>
              </ul>
          </ul>
        </div>
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

<style lang="scss" scoped>
@media only screen and (min-width: 500px) {
  div {
    .content {
      width: 50%;
      margin: 0 auto;
    }
  }
}
</style>
