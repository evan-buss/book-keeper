<template>
  <div class="panel-body">

    <!-- Hero Section -->
    <section class="hero is-small is-primary is-bold">

      <!-- Hero-Head -->
      <div class="hero-head">
        <NavBar></NavBar>
      </div>

      <!-- Hero-Body -->
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            View Your Books
            <span class="icon has-text-dark">
              <i class="fa fa-eye"></i>
            </span>
          </h1>
        </div>
      </div>
    </section>

    <!-- Table -->
    <section class="section">
      <div class="container is-fluid">
        <table class="table is-hoverable is-narrow is-striped is-fullwidth">

          <!-- Table Head -->
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Delete</th>
            </tr>
          </thead>

          <!-- Table Body -->
          <tbody>
            <tr v-for="book in books" :key="book['.key']">
              <td>

                <!-- Book Title Entry -->
                <a v-on:click="toggleModal">{{ book.title }}</a>

                <!-- Modal Note Dialog -->
                <div v-if="showModal" class="modal is-active">
                  <div class="modal-background"></div>
                  <div class="modal-card">
                    <header class="modal-card-head">
                      <p class="modal-card-title">{{ book.title }} - Notes</p>
                      <button @click="toggleModal" class="delete" aria-label="close"></button>
                    </header>
                    <section class="modal-card-body">
                      <textarea class="textarea is-focused" v-model="note" placeholder="This was a great book!"></textarea>
                    </section>
                    <footer class="modal-card-foot">
                      <button @click="saveNote(book)" class="button is-success">Save changes</button>
                      <button @click="toggleModal" class="button">Cancel</button>
                    </footer>
                  </div>
                </div>
              </td>

              <!-- Author Entry -->
              <td>{{ book.author }}</td>

              <!-- Remove Entry Button -->
              <td>
                <i class="fa fa-trash" aria-hidden="true" v-on:click="removeBook(book)"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script>
import { db } from '../config/db.js';
import NavBar from './NavBar';

export default {
  name: 'BookTable',
  firebase: {
    books: db.ref("books"),
  },
  components: {
    NavBar
  },
  data () {
    return {
      showModal: false,
      note: ""
    }
  },
  methods: {
    removeBook: function (book) {
      this.$firebaseRefs.books.child(book['.key']).remove()
    },
    saveNote: function (book) {
      // update the firebase note value to the local note
      this.$firebaseRefs.books.child(book['.key']).child('note').set(this.note);
      this.toggleModal(book);
    },
    toggleModal: function (book) {
      // might clear note / display note when loaded / closed
      this.showModal = !this.showModal;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
