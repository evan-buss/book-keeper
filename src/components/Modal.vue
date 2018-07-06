<template>
  <div @keydown.ctrl.enter="$emit('save', [key, note] )" class="modal is-active">

    <!-- Transparent Background -->
    <div @click="$emit('close')" class="modal-background"></div>
    <!-- Modal Card -->
    <div class="modal-card">
      <!-- Card Header -->
      <header class="modal-card-head">
        <p class="modal-card-title">
          <slot></slot>
        </p>
        <button @click="$emit('close')" class="delete" aria-label="close"></button>
      </header>

      <!-- Card Body -->
      <section class="modal-card-body">
        <textarea class="textarea is-focused" ref="note" v-model="note" placeholder="This was a great book!"></textarea>
        <!-- <button class="button" @click="logBook">Log to Console</button> -->
      </section>

      <!-- Card Footer -->
      <footer class="modal-card-foot">
        <button @click="$emit('save', [key, note])" class=" button is-success ">Save changes</button>
        <button @click="$emit('close')" class="button">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    bookKey: String,
    bookNote: String
  },
  data: function() {
    return {
      key: this.bookKey,
      note: this.bookNote
    };
  },
  methods: {
    // logBook: function() {
    //   console.log(this.key);
    //   console.log(this.note);
    // }
  },
  mounted: function() {
    this.$refs.note.focus();
  }
};
</script>

<style lang="scss" scoped>
@import "../style";
@import "../../node_modules/bulma/sass/components/modal";
@import "../../node_modules/bulma/sass/elements/button";
@import "../../node_modules/bulma/sass/elements/other";
@import "../../node_modules/bulma/sass/elements/form";
</style>
