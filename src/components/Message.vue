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
    displayTime: function() {
      setTimeout(() => {
        this.handleClick();
      }, this.time * 1000);
    },
    handleClick: function() {
      this.display = false;
      this.$emit("messageClose");
    },
    frame: function() {
      if (this.width >= 100) {
        clearInterval(this.id);
        this.handleClick();
      } else {
        this.width++;
      }
    }
  },
  mounted: function() {
    if (this.isProgress) {
      this.id = setInterval(this.frame, this.time * 1000 / 100);
    } else {
      this.displayTime();
    }
  }
};
</script>

<style scoped>
.notification {
  position: fixed;
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
    /* font-size: 1rem; */
    height: 80px;
    margin: 5px;
    width: calc(100% - 10px);
  }
}
</style>
