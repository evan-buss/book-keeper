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
          <h1 class="title is-2">
            <span class="icon has-text-dark">
              <i class="fa fa-plus"></i>
            </span>
          </h1>
        </div>
      </div>
    </section>

    <section class="section page-content">
      <transition
        name="display-message"
        enter-active-class="animated bounceIn"
        leave-active-class="animated fadeOut"
      >
        <Message
          v-if="showMessage"
          @messageClose="handleClose"
        >
          {{ title }} by {{ author }} has been added to your library!
        </Message>
      </transition>

      <div class="form-container container is-fluid">
        <!--      @submit.exact="this.focusInput"
          id="form"
          v-on:submit.prevent="addBook" -->
        <!-- <form> -->

        <!-- Book Title Field -->
        <div class="field">
          <label class="label">Title</label>
          <div class="control has-icons-left has-icons-right">
            <input
              class="input"
              ref="title"
              :class="{ 'is-danger': errors.has('title') }"
              autocomplete="off"
              id="bookTitle"
              name="title"
              placeholder="Book Title"
              type="text"
              v-validate.disable="'required|min:2'"
              v-model="newBook.title"
            >

            <!-- Input bar icons -->
            <span class="icon is-small is-left">
              <i class="fa fa-book"></i>
            </span>
            <span class="icon is-small is-right">
              <i
                class="fa fa-exclamation-triangle"
                v-if="errors.has('title')"
              ></i>
            </span>
          </div>

          <!-- Validation Error Popup-->
          <transition
            name="bounce"
            enter-active-class="animated bounceIn"
            leave-active-class="animated bounceOut"
          >
            <p
              v-if="errors.has('title')"
              class="help is-danger"
            >{{ errors.first('title') }}</p>
          </transition>

        </div>

        <!-- Book Author Field -->
        <div class="field">
          <label
            class="label"
            for="bookAuthor"
          >Author</label>
          <div class="control has-icons-left has-icons-right">
            <input
              class="input"
              :class="{ 'is-danger': errors.has('author') }"
              autocomplete="off"
              id="bookAuthor"
              name="author"
              placeholder="Book Author"
              type="text"
              v-validate="'required|min:2'"
              v-model="newBook.author"
              @keydown.enter="addBook"
            >

            <!-- Input bar icons -->
            <span class="icon is-small is-left">
              <i class="fa fa-user"></i>
            </span>
            <span class="icon is-small is-right">
              <i
                class="fa fa-exclamation-triangle"
                v-if="errors.has('author')"
              ></i>
            </span>
          </div>

          <!-- Validation Error Popup-->
          <transition
            name="bounce"
            enter-active-class="animated bounceIn"
            leave-active-class="animated bounceOut"
          >
            <p
              class="help is-danger"
              v-if="errors.has('author')"
            >
              {{ errors.first('author') }}
            </p>
          </transition>
        </div>

        <!-- Button Row -->
        <div class="buttons">
          <router-link
            to="/books"
            class="button"
          >Your Books</router-link>
          <button
            @click="addBook"
            class="button is-primary"
            value="Add Book"
          >Add Book</button>
        </div>
        <!-- </form> -->
      </div>
    </section>
  </div>
</template>

<script>
import { db } from "../db.js";
import NavBar from "../components/NavBar";
import Message from "../components/Message";

export default {
  name: "BookInput",
  components: {
    NavBar,
    Message
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
      },
      title: "",
      author: "",
      showMessage: false
    };
  },
  methods: {
    addBook: function() {
      console.log("add book");

      this.$validator.validateAll().then(result => {
        if (result) {
          console.log("Validation successful");
          this.newBook.date = new Date().toLocaleDateString("en-US").toString();
          this.$firebaseRefs.books.push(this.newBook);
          this.title = this.newBook.title;
          this.author = this.newBook.author;
          this.showMessage = true;
          this.newBook.title = "";
          this.newBook.author = "";
          this.focusInput();
        }
      });
    },
    focusInput: function() {
      this.$refs.title.focus();
    },
    handleClose: function() {
      this.showMessage = false;
      this.focusInput();
    }
  },
  mounted: function() {
    this.focusInput();
  }
};
</script>

<style lang="scss" scoped>
div.buttons {
  display: inline-block;
}

input {
  font-family: "Fira Sans";
}
.control {
  width: 75%;
  margin: auto;
}

.page-content {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}

.form-container {
  background-color: white;
  margin-top: -100px;
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

@media only screen and (min-width: 768px) {
  .form-container {
    width: 80%;
  }
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (min-width: 1200px) {
  .form-container {
    width: 50%;
  }
}
</style>
