<template>
  <div>
    <span v-for="(index, value) in stars" :key="index" @click="saveRating(index)" @mouseover="mouseOver(index)" @mouseout="mouseOff">
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
    debugLog: function(message) {
      console.log(message);
    },
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
      console.log("saved rating");
      this.savedRating = value;
      this.starStyle = "gold";
      this.$emit("save", this.saveRating);
    }
  },
  mounted: function() {
    this.init();
  }
};
</script>

<style scoped>
.horizIcons {
  display: inline-block;
}

/* .star__unsaved {
  color: grey;
}

.star__saved {
  color: gold;
} */
span.icon {
  border: 1px solid black;
}
</style>
