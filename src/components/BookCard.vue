<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        <slot name="header"></slot>
      </p>
      <div class="card-header-icon">
        <StarRating @save="ratingToParent" :rating="rating"></StarRating>
      </div>
    </header>
    <div class="card-content">
      <div class="content">
        <slot name="text">
          Default slot content. Enter custom info using the text slot.
        </slot>
      </div>
    </div>
    <footer class="card-footer">
      <div class="card-footer-item">
        <p style="color: #3273e1;">
          <slot name="date">
            No Date
          </slot>
        </p>
      </div>
      <a @click="$emit('showModal')" class="card-footer-item">Edit</a>
      <a @click="$emit('remove')" class="card-footer-item">Delete</a>
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
    return {
      emitRating: null
      // dateString: "mm-dd-yyyy"
    };
  },
  methods: {
    debugLog: function(message) {
      console.log(message);
    },
    ratingToParent: function(rating) {
      // * FIXME: might not need to offload to local variable, test this
      console.log("Rating passed to card: " + rating);
      this.emitRating = rating;
      this.$emit("saveRating", this.emitRating);
    }
  }
};
</script>


<style scoped>
StarRating {
  width: 95px;
}

.dateSlot {
  color: #3273e1;
}
</style>
