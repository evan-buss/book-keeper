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
            <label class="label">Title:</label>
            <div class="control has-icons-left has-icons-right">
              <input class="input"
                :class="{ 'is-danger': errors.has('title') }"
                autocomplete="off"
                id="bookTitle"
                name="title"
                placeholder="Book Title"
                type="text"
                v-validate.disable="'required|min:2'"
                v-model="newBook.title">

              <span class="icon is-small is-left">
                <i class="fa fa-book"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fa fa-exclamation-triangle" v-if="errors.has('title')"></i>
              </span>
            </div>
              <!-- Validation Error Popup-->
              <transition name="fade"
                enter-active-class="animated fadeIn"
                leave-active-class="animated fadeOut"
                v-if="errors.has('title')">
                 <p class="help is-danger">{{ errors.first('title') }}</p>
              </transition>


          </div>

          <!-- Book Author Field -->
          <div class="field">
            <label class="label" for="bookAuthor">Author:</label>
            <div class="control has-icons-left has-icons-right">
              <input class="input"
                :class="{ 'is-danger': errors.has('author') }"
                autocomplete="off"
                id="bookAuthor"
                name="author"
                placeholder="Book Author"
                type="text"
                v-validate.disable="'required|min:2'"
                v-model="newBook.author">

              <span class="icon is-small is-left">
                <i class="fa fa-user" ></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fa fa-exclamation-triangle" v-if="errors.has('author')"></i>
              </span>
            </div>

              <!-- Validation Error Popup-->
              <transition name="fade"
                v-if="errors.has('author')"
                enter-active-class="animated fadeIn"
                leave-active-class="animated fadeOut">
                <p class="help is-danger">{{ errors.first('author') }}</p>
              </transition>


          </div>

          <input type="submit" class="button is-primary" value="Add Book">

        </form>
      </div>
    </section>
  </div>
</template>

<script>
import { db } from "../db.js";
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
        note: "",
        date: "",
        rating: 0
      }
    };
  },
  methods: {
    addBook: function() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.newBook.date = new Date().toLocaleDateString("en-US").toString();
          this.$firebaseRefs.books.push(this.newBook);
          console.log(
            "adding title: " +
              this.newBook.title +
              " author: " +
              this.newBook.author
          );
          this.newBook.title = "";
          this.newBook.author = "";
        }
      });
    }
  }
};
</script>

<style scoped>
input {
  font-family: "Fira Sans";
}
.control {
  width: 75%;
  margin: auto;
}
@media only screen and (max-width: 500px) {
  .control {
    width: 100%;
    margin: 0.75em auto;
  }
}
</style>
