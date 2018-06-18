import Vue from "vue";
import Router from "vue-router";
import Home from "../components/Home";
import BookInput from "../components/BookInput";
import BookTable from "../components/BookTable";

Vue.use(Router);
// TODO: Learn how to pass router parameters
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
    }
  ]
});
