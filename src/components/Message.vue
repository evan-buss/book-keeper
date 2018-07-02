<template>
  <div @click="handleClick" v-show="display" class="notification" :class="messageType">
    <slot @click="handleClick"></slot>
    <span v-if="isProgress" class="icon">
        <i class="fa fa-undo"></i>
    </span>
    <progress class="progress is-primary is-small" :value="this.width" max="100" v-if="isProgress"></progress>
  </div>
</template>

<script>
export default {
  name: "Message",
  props: {
    time: {
      default: 4,
      type: Number
    },
    messageType: {
      default: "is-success",
      type: String
    },
    isProgress: {
      default: false,
      type: Boolean
    }
  },
  data: function() {
    return {
      display: true,
      width: 1,
      id: null
    };
  },
  methods: {
    // shows the message for a certain period of time before closing it
    displayTime: function() {
      setTimeout(() => {
        this.$emit("messageClose");
      }, this.time * 1000);
    },
    handleClick: function() {
      this.display = false;
      // if the message is a progress bar, clicking it undoes a deletion
      if (this.isProgress) {
        this.$emit("undoDelete");
        // otherwise a click just closes the message
      } else {
        this.$emit("messageClose");
      }
    },
    frame: function() {
      if (this.width >= 100) {
        clearInterval(this.id);
        this.$emit("messageClose");
      } else {
        this.width++;
      }
    }
  },
  // on mount start progress bar or start message display time
  mounted: function() {
    if (this.isProgress) {
      this.id = setInterval(this.frame, (this.time * 1000) / 100);
    } else {
      this.displayTime();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../style";
@import "../../node_modules/bulma/sass/elements/icon";
@import "../../node_modules/bulma/sass/elements/notification";
@import "../../node_modules/bulma/sass/elements/progress";

.notification {
  position: absolute;
  top: 100px;
  right: 10px;
}
@media only screen and (max-width: 500px) {
  .notification {
    top: auto;
    bottom: 0px;
    right: auto;
    left: 0px;
    z-index: 5;
    height: 80px;
    margin: 5px;
    width: calc(100% - 10px);
  }
}
</style>
