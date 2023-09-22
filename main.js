// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD9YaKKdDmwpoat8La21jRb2gCnErjSQ5E",
    authDomain: "kwitter-3a5b9.firebaseapp.com",
    databaseURL: "https://kwitter-3a5b9-default-rtdb.firebaseio.com",
    projectId: "kwitter-3a5b9",
    storageBucket: "kwitter-3a5b9.appspot.com",
    messagingSenderId: "79987278863",
    appId: "1:79987278863:web:1b3a9e42a599bb5abc8f7a"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function doit(){
    user_name = document.getElementById("UNT").value;
    localStorage.setItem("UNT", user_name);
    window.location = "Wip.html";

    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
      purpose: "adding person"
    });
}