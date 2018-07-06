<template>
  <div>

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

    <transition name="modal-transition"
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut">
      <Modal :bookKey="modal.key"
        :bookNote="modal.note"
        v-if="showModal"
        @save="saveNote"
        @close="showModal=false">
          {{modal.title}} by {{modal.author}} - Notes
      </Modal>
    </transition>

    <!-- Content Section -->
    <section class="section">
      <!-- Message Popup -->
      <transition name="message-transition"
        enter-active-class="animated bounceIn"
        leave-active-class="animated fadeOut">
        <Message :isProgress="true"
          :time="3"
          messageType="is-danger"
          v-if="showMessage"
          @messageClose="showMessage=false"
          @undoDelete="undoDelete">
            Book Deleted! Click to undo...
        </Message>
      </transition>

      <div class="container is-fluid">
          <transition-group
            class="columns is-multiline"
            name="card-transition"
            enter-to-class="animated fadeIn"
            leave-active-class="animated fadeOut">
            <template v-for="book in books">
              <div class="column is-one-third" :key="book['.key']">
                <BookCard
                  :rating="Number(book.rating)"
                  @remove="removeBook(book)"
                  @showModal="modalFunc(book)"
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
                  <template v-if="book.date!=''" slot="date">
                    {{ book.date}}
                  </template>
                </BookCard>
              </div>
            </template>
         </transition-group>
      </div>
    </section>
  </div>
</template>

<script>
import { db } from "../db.js";
import BookCard from "../components/BookCard";
import Message from "../components/Message";
import Modal from "../components/Modal";
import NavBar from "../components/NavBar";

export default {
  name: "BookTable",
  firebase: {
    books: db.ref("books")
  },
  components: {
    BookCard,
    Message,
    Modal,
    NavBar
  },
  data() {
    return {
      showModal: false,
      showMessage: false,
      modal: {
        key: "",
        title: "",
        author: "",
        note: ""
      },
      history: {}
    };
  },
  methods: {
    // Remove the book from the database
    removeBook: function(book) {
      this.history = book;
      this.$firebaseRefs.books.child(book[".key"]).remove();
      this.showMessage = true;
    },
    undoDelete: function() {
      // push the last object saved in history array
      // console.log(JSON.stringify(this.history));
      delete this.history[".key"];
      this.$firebaseRefs.books.push(this.history);
      this.showMessage = false;
    },
    // Show the modal and view / edit the note
    modalFunc: function(book) {
      this.showModal = true;
      this.modal.key = book[".key"];
      this.modal.title = book.title;
      this.modal.author = book.author;
      this.modal.note = book.note;
    },
    // Save the note to database and close the modal
    saveNote: function(data) {
      this.$firebaseRefs.books
        .child(data[0])
        .child("note")
        .set(data[1]);
      // hide modal
      this.showModal = false;
    },
    // save the returned rating to firebase
    handleRating: function(rating, key) {
      this.$firebaseRefs.books
        .child(key)
        .child("rating")
        .set(rating);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../style";
@import "../../node_modules/bulma/sass/layout/hero";
@import "../../node_modules/bulma/sass/elements/container";
@import "../../node_modules/bulma/sass/layout/section";
@import "../../node_modules/bulma/sass/elements/icon";
@import "../../node_modules/bulma/sass/elements/title";
@import "../../node_modules/bulma/sass/grid/columns";

@import "../../node_modules/animate.css/animate";
</style>
