<template>
  <div class="star-rating">
    <span v-for="(index, value) in stars"
      :key="index" @click="saveRating(index)"
      @mouseover="mouseOver(index)"
      @mouseout="mouseOff">

      <span v-if="value < currentRating">
        <i :style="{ color: starStyle }" class="star fa fa-star"></i>
      </span>

      <span v-if="value >= currentRating">
        <i :style="{ color: starStyle }" class="star fa fa-star-o"></i>
      </span>
    </span>
  </div>
</template>

<script>
export default {
  name: "StarRating",
  props: {
    // bookKey: String,
    rating: Number
  },
  data: function() {
    return {
      stars: [1, 2, 3, 4, 5],
      currentRating: this.rating,
      savedRating: this.rating,
      starStyle: "grey"
    };
  },
  methods: {
    init: function() {
      if (this.rating != 0) {
        this.starStyle = "gold";
      }
    },
    // highlights stars based on which star is being hovered
    mouseOver: function(starPosition) {
      this.currentRating = starPosition;
    },
    mouseOff: function() {
      this.currentRating = this.savedRating;
    },
    saveRating: function(value) {
      this.savedRating = value;
      this.starStyle = "gold";
      this.$emit("save", this.savedRating);
    }
  },
  mounted: function() {
    this.init();
  }
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 500px) {
  /* attempting to correct stars breaking line formation on small screens */
  .star-rating {
    position: absolute;
    z-index: 4;
    width: 75px;
    top: 0.75em;
    right: 0.75em;
  }
}
</style>
