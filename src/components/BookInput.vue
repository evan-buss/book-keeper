<template>
  <div>

    <!-- Hero Section -->
    <section class="hero is-medium is-primary is-bold">

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
              <input class="input" type="text" id="bookTitle" placeholder="Book Title" v-model="newBook.title">
            </div>
          </div>

          <!-- Book Author Field -->
          <div class="field">
            <label class="label" for="bookAuthor">Author:</label>
            <div class="control">
              <input class="input" type="text" id="bookAuthor" placeholder="Book Author" v-model="newBook.author">
            </div>
          </div>

          <!-- Book Url Field -->
          <!-- <div class="field">
            <label class="label" for="bookUrl">Url:</label>
            <div class="control">
              <input class="input" type="text" id="bookUrl" placeholder="Book Url" v-model="newBook.url">
            </div>
          </div> -->

          <input type="submit" class="button is-primary" value="Add Book">
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import { db } from '../config/db.js';
import BookTable from './BookTable';
import NavBar from './NavBar';

export default {
  name: 'BookInput',
  components: {
    BookTable,
    NavBar
  },
  firebase: {
    books: db.ref("books")
  },
  data () {
    return {
      newBook: {
        title: '',
        author: '',
        note: 'Empty Note'
      }
    }
  },
  // TODO: only allow them to submit if the fields aren't blank
  methods: {
    addBook: function () {
      this.$firebaseRefs.books.push(this.newBook);
      this.newBook.title = '';
      this.newBook.author = '';
    }
  }
}
</script>

<style scoped>
</style>
