<template>
  <!-- Navigation Bar -->
  <nav class="navbar is-spaced">

    <!-- TODO: Try to create a hamburger menu for mobile screens -->
    <!-- Navbar Start -->
    <div class="navbar-start">
      <router-link to="/" class="navbar-item">Home</router-link>
      <router-link to="/input" class="navbar-item">Add a Book</router-link>
      <router-link to="/table" class="navbar-item">Your Books</router-link>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'NavBar'
  }
</script>

<style scoped>
</style>
