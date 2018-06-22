<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        <slot name="header"></slot>
      </p>
      <div class="card-header-icon">
        <StarRating :rating="rating"></StarRating>
      </div>
    </header>
    <div class="card-content">
      <div class="content">
        <slot name="content">
          Default slot content. Enter custom info using the content slot.
        </slot>
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">Rate</a>
      <a href="#" class="card-footer-item">Edit</a>
      <a href="#" class="card-footer-item">Delete</a>
    </footer>
  </div>
</template>

<script>
import StarRating from "./StarRating";

export default {
  name: "BookCard",
  components: {
    StarRating
  },
  props: {
    rating: Number
  },
  data: function() {
    return {};
  },
  methods: {
    debugLog: function(message) {
      console.log(message);
    }
  }
};
</script>


<style scoped>
</style>
