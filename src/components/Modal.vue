<template>
  <div class="modal is-active">

    <!-- Transparent Background -->
    <div @click="$emit('close')" class="modal-background"></div>

    <!-- Moda Card -->
    <div class="modal-card">

      <!-- Card Header -->
      <header class="modal-card-head">
        <p class="modal-card-title">Book Notes</p>
        <button @click="$emit('close')" class="delete" aria-label="close"></button>
      </header>

      <!-- Card Body -->
      <section class="modal-card-body">
        <textarea class="textarea is-focused" v-model="this.note" placeholder="This was a great book!"></textarea>
      </section>

      <!-- Card Footer -->
      <footer class="modal-card-foot">
        <button @click="$emit('save', this.note) " class=" button is-success ">Save changes</button>
        <button @click="$emit('close')" class="button ">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: [
    'bookData',
    'noteProp'
  ],
  data: function () {
    return {
      note: ""
    }
  },
  methods: {
    mounted: function () {
      this.note = this.noteProp
    }
  }
}
</script>

