import FireBase from "firebase/app";
import "firebase/database";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBeO_sQclab8IK0JR6zGWztrz3fRnfj9Iw",
  authDomain: "book-list-68850.firebaseapp.com",
  databaseURL: "https://book-list-68850.firebaseio.com",
  projectId: "book-list-68850",
  storageBucket: "book-list-68850.appspot.com",
  messagingSenderId: "5517341615"
};

let app = FireBase.initializeApp(config);
// export const db = app.database();
export const db = app.database();
