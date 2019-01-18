 <template>
  <!-- Navigation Bar -->
  <nav class="navbar is-spaced">
    <div class="navbar-brand">
      <span class="navbar-item nav-logo is-hidden-desktop">
        <span class="icon left-logo">
          <a
            href="https://github.com/evan-buss/book-list"
            style="font-size:35px;"
            name="GitHub"
            alt="GitHub"
          >
            <i class="fa fa-github"></i>
          </a>
        </span>
      </span>
      <div
        @click="navActive = !navActive"
        class="navbar-burger"
      >
        <a
          role="button"
          class="navbar-burger"
          :class="{ 'is-active': navActive }"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    </div>
    <div
      class="navbar-menu"
      :class="{ 'is-active': navActive }"
    >
      <div class="navbar-start">
        <router-link
          to="/"
          class="navbar-item"
        >Home</router-link>
        <router-link
          to="/input"
          class="navbar-item"
        >Add a Book</router-link>
        <router-link
          to="/books"
          class="navbar-item"
        >Your Books</router-link>
        <router-link
          to="/table"
          class="navbar-item"
        >Book Table</router-link>
        <router-link
          to="/about"
          class="navbar-item"
        >About</router-link>
      </div>
      <div class="navbar-end">

        <a
          class="navbar-item nav-logo is-hidden-mobile"
          href="https://github.com/evan-buss/book-list"
          style="margin-left: 20px; font-size: 45px;"
          name="Homepage"
        >
          <span class="icon">
            <i class="fa fa-github"></i>
          </span>
        </a>

        <a
          class="navbar-item nav-logo is-hidden-mobile"
          href="https://evanbuss.com"
          style="margin-left: 20px; font-size: 45px;"
          name="Homepage"
        >
          <span class="icon">
            <i class="fa fa-home"></i>
          </span>
        </a>

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

<style lang="scss" scoped>
.left-logo {
  padding: 20px;
}
</style>
