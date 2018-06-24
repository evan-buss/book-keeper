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
          </h1>
          <h1 class="title is-2">
            <span class="icon has-text-dark">
              <i class="fa fa-eye"></i>
            </span>
          </h1>
        </div>
      </div>
    </section>

    <!-- Modal Note-Editor Dialog -->
    <Modal :bookKey="this.key"
      :bookNote="this.note"
      v-if="modalIsActive"
      @save="saveNote"
      @close="modalIsActive=false">
        {{this.title}} by {{this.author}} - Notes
    </Modal>

    <!-- Content Section -->
    <section class="section">
      <div class="container is-fluid">
        <!-- Columns -->
        <!-- divide by the number of items per row you want to have -->
        <div class="gridContainer">
          <div v-for="book in books" :key="book['.key']">
            <BookCard
              :rating="Number(book.rating)"
              @remove="removeBook(book)"
              @showModal="showModal(book)"
              @saveRating="handleRating($event, book['.key'])">

              <template slot="header">
                {{ book.title }} - {{ book.author }}
              </template>
              <template slot="text">
                <p v-if="book.note != ''">
                  {{ book.note }}
                </p>
                <p v-else style="color: lightgrey;">
                  Tell the world what you thought of the book!
                </p>
              </template>
              <template v-if="book.date != ''" slot="date">
                {{ book.date}}
              </template>
            </BookCard>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { db } from "../db.js";
import NavBar from "../components/NavBar";
import Modal from "../components/Modal";
import BookCard from "../components/BookCard";

export default {
  name: "BookTable",
  firebase: {
    books: db.ref("books")
  },
  components: {
    BookCard,
    NavBar,
    Modal
  },
  data() {
    return {
      modalIsActive: false,
      // might not need because I never change the value
      key: "",
      title: "",
      author: "",
      note: "",
      colLen: 3
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
      console.log("key: " + data[0] + " data: " + data[1]);
      this.$firebaseRefs.books
        .child(data[0])
        .child("note")
        .set(data[1]);
      console.log("Should be saved to firebase...");
      this.modalIsActive = false;
    },
    handleRating: function(rating, key) {
      this.$firebaseRefs.books
        .child(key)
        .child("rating")
        .set(rating);
      console.log("key: " + key);
      console.log("rating to save " + rating);
      console.log("rating should be save to firebase");
    }
  }
};
</script>

<style scoped>
.gridContainer {
  display: grid;
  grid-gap: 0.75em;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-auto-flow: row;
}

@media only screen and (max-width: 500px) {
  .gridContainer {
    grid-template-columns: 1fr;
  }
}
</style>
