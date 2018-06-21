import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home";
import BookInput from "../views/BookInput";
import BookTable from "../views/BookTable";
import BooksView from "../views/BooksView";

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/table",
      name: "BookTable",
      component: BookTable
    },
    {
      path: "/input",
      name: "BookInput",
      component: BookInput
    },
    {
      path: "/books",
      name: "BooksView",
      component: BooksView
    }
  ]
});
