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
            Add New Books
          </h1>
          <h1 class="title is-2">
            <span class="icon has-text-dark">
              <i class="fa fa-plus"></i>
            </span>
          </h1>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container is-fluid">
        <form id="form" v-on:submit.prevent="addBook">

          <!-- Book Title Field -->
          <div class="field">
            <label class="label" for="bookTitle">Title:</label>
            <div class="control">
              <input v-validate.disable="'required|min:2'" name="title" class="input" type="text" id="bookTitle" placeholder="Book Title" v-model="newBook.title" autocomplete="off">

              <!-- Validation Error Popup-->
              <transition v-if="errors.has('title')" name="fade" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                <article class="alert message is-danger is-small">
                  <div class="message-body">
                    {{ errors.first('title') }}
                  </div>
                </article>
              </transition>

            </div>
          </div>

          <!-- Book Author Field -->
          <div class="field">
            <label class="label" for="bookAuthor">Author:</label>
            <div class="control">
              <input v-validate.disable="'required|min:2'" name="author" class="input" type="text" id="bookAuthor" placeholder="Book Author" v-model="newBook.author" autocomplete="off">

              <!-- Validation Error Popup-->
              <transition v-if="errors.has('author')" name="fade" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                <article class="alert message is-danger is-small">
                  <div class="message-body">
                    {{ errors.first('author') }}
                  </div>
                </article>
              </transition>

            </div>
          </div>
          <!-- <input type="submit" class="button is-primary" :title="{ Disabled: true, button }" value="Add Book"> -->
          <input type="submit" class="button is-primary" value="Add Book">

        </form>
      </div>
    </section>
  </div>
</template>

<script>
import { db } from "../config/db.js";
import NavBar from "../components/NavBar";

export default {
  name: "BookInput",
  components: {
    NavBar
  },
  firebase: {
    books: db.ref("books")
  },
  data() {
    return {
      newBook: {
        title: "",
        author: "",
        note: "Empty Note"
      }
    };
  },
  methods: {
    addBook: function() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.$firebaseRefs.books.push(this.newBook);
          this.newBook.title = "";
          this.newBook.author = "";
        }
      });
    }
  }
};
</script>

<style scoped>
</style>
