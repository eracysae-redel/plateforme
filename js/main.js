var config = {
  apiKey: "AIzaSyBfL7v9RPTss2chnnn7yQaG37BvWnhZiGs",
  authDomain: "plateforme-96b58.firebaseapp.com",
  databaseURL: "https://plateforme-96b58.firebaseio.com/",
  projectId: "plateforme-96b58",
  storageBucket: "plateforme-96b58.appspot.com",
  messagingSenderId: "198670684474",
  appId: "1:198670684474:web:ad5448b601c3c534000003",
  measurementId: "G-KZ89B3S9VM"
};
firebase.initializeApp(config);



firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});

// Fonction de connexion
function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

//Fonction de déconnexion
function logout(){
  firebase.auth().signOut();
}

//Fonction d'INSCRIPTION
function signUp(){

  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.createUserWithEmailAndPassword(email.value, password.value);

  promise.catch(e => alert(e.message));

  alert("Signed Up")
