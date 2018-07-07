import Vue from "vue";
import Router from "vue-router";
import About from "./views/About";
import Home from "./views/Home";
import BooksInput from "./views/BooksInput";
import BooksView from "./views/BooksView";
import BookTable from "./views/BookTable";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "About",
      component: About
    },
    {
      path: "/input",
      name: "BooksInput",
      component: BooksInput
    },
    {
      path: "/books",
      name: "BooksView",
      component: BooksView
    },
    {
      path: "/table",
      name: "BooksTable",
      component: BookTable
    }
  ]
});
