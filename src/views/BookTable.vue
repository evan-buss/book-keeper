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
            Books Table (old)
          </h1>
          <h1 class="title is-2">
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

          <!-- Modal Note-Editor Dialog -->
          <Modal :bookKey="this.key" :bookNote="this.note" v-if="modalIsActive" v-on:save="saveNote" @close="modalIsActive=false">{{this.title}} by {{this.author}} - Notes</Modal>

          <!-- Table Body -->
          <tbody>
            <tr v-for="book in books" :key="book['.key']">
              <td>
                <a v-on:click="showModal(book)">{{ book.title }}</a>
              </td>
              <td @click="logBook(book)">{{ book.author }}</td>
              <td>
                <i class="fa fa-trash" aria-hidden="true " v-on:click="removeBook(book) "></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script>
import { db } from "../db.js";
import NavBar from "../components/NavBar";
import Modal from "../components/Modal";

export default {
  name: "BookTable",
  firebase: {
    books: db.ref("books")
  },
  components: {
    NavBar,
    Modal
  },
  data() {
    return {
      modalIsActive: false,
      key: "",
      title: "",
      author: "",
      note: ""
    };
  },
  methods: {
    // Remove the book from the database
    removeBook: function(book) {
      this.$firebaseRefs.books.child(book[".key"]).remove();
    },
    // Show the modal and view / edit the note
    showModal: function(book) {
      this.modalIsActive = true;
      this.key = book[".key"];
      this.title = book.title;
      this.author = book.author;
      this.note = book.note;
    },
    // Save the note to database and close the modal
    saveNote: function(data) {
      // update the firebase note value to the local note
      this.$firebaseRefs.books
        .child(data[0])
        .child("note")
        .set(data[1]);
      this.modalIsActive = false;
      data[1] = "";
    }
  }
};
</script>

<style scoped>
</style>
