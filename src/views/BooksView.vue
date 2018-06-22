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

    <!-- Content Section -->
    <section class="section">
      <div class="container is-fluid">

        <!-- Columns -->
        <div class="columns">
          <div class="column">
            <BookCard :rating="4">
              <template slot="header">
                Title - Author
              </template>
              <template slot="content">
                This is the note for Title - Author
              </template>
            </BookCard>
          </div>
          <div class="column">
            <BookCard :rating="0">
              <template slot="header">
                Title - Author
              </template>
              <template slot="content">
                This is the note for Title - Author
              </template>
            </BookCard>
          </div>
        </div>

        <div class="columns">
          <div class="column">
            <BookCard :rating="1">
              <template slot="header">
                Title - Author
              </template>
              <template slot="content">
                This is the note for Title - Author
              </template>
            </BookCard>
          </div>
          <div class="column">
            <BookCard :rating="2">
              <template slot="header">
                Title - Author
              </template>
              <template slot="content">
                This is the note for Title - Author
              </template>
            </BookCard>
          </div>
          <div class="column">
            <BookCard :rating="3">
              <template slot="header">
                Title - Author
              </template>
              <template slot="content">
                This is the note for Title - Author
              </template>
            </BookCard>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
import { db } from "../config/db.js";
import NavBar from "../components/NavBar";
import Modal from "../components/Modal";
import BookCard from "../components/BookCard";

export default {
  name: "BookTable",
  firebase: {
    books: db.ref("books")
  },
  components: {
    NavBar,
    Modal,
    BookCard
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
      console.log("Should be saved to firebase...");
      this.modalIsActive = false;
      data[1] = "";
    }
  }
};
</script>

<style scoped>
</style>
