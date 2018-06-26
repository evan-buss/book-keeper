<template>
  <div @click="handleClick" v-show="display" class="notification is-success">
    <button @click="handleClick" class="delete"></button>
    <slot @click="handleClick"></slot>
  </div>
</template>

<script>
export default {
  name: "Message",
  data: function() {
    return {
      display: true,
      time: 4
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
    }
  },
  mounted: function() {
    this.displayTime();
  }
};
</script>

<style scoped>
.notification.is-success {
  position: fixed;
  top: 100px;
  right: 10px;
  /* width: 400px; */
}
@media only screen and (max-width: 500px) {
  .notification.is-success {
    position: fixed;
    bottom: 0px;
    top: auto;
    right: auto;
    z-index: 5;
    left: 0px;
    font-size: 1rem;
    height: 80px;
    margin: 5px;
    width: calc(100% - 10px);
  }
}
</style>
