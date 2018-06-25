<template>
  <!-- Navigation Bar -->
  <nav class="navbar is-spaced">
    <div class="navbar-brand">
      <div @click="navActive = !navActive" class="navbar-burger">
        <a role="button" class="navbar-burger" :class="{ 'is-active': navActive }" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    </div>

    <div class="navbar-menu" :class="{ 'is-active': navActive }">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item">Home</router-link>
        <router-link to="/input" class="navbar-item">Add a Book</router-link>
        <router-link to="/books" class="navbar-item">Your Books</router-link>
        <router-link to="/table" class="navbar-item">Book Table</router-link>
        <router-link to="/about" class="navbar-item">About</router-link>
        <a class="navbar-item is-hidden-desktop" href="https://github.com/evan-buss/book-list">Github Repo</a>
      </div>
      <div class="navbar-end">

        <span class="navbar-item icon nav-logo is-hidden-mobile">
          <a href="https://github.com/evan-buss/book-list" style="font-size: 45px;">
            <i class="fa fa-github"></i>
          </a>
        </span>
        <!-- TODO: copy github link from other project and put a link to the repo here -->
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data: function() {
    return {
      navActive: false
    };
  }
};
</script>

<style scoped>
</style>
