<template>
  <section class="hero is-fullheight is-primary is-bold">

    <!-- Hero-Head -->
    <div class="hero-head">
      <NavBar></NavBar>
    </div>

    <!-- Hero-Body -->
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Welcome to the Book Keeper
          <span class="icon has-text-dark">
            <i class="fa fa-book"></i>
          </span>
        </h1>
      </div>
    </div>
  </section>
</template>

<script>
import NavBar from './NavBar';

export default {
  name: 'Home',
  components: {
    NavBar
  }
}
</script>
