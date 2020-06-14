var firebaseConfig = {
  apiKey: "AIzaSyBfL7v9RPTss2chnnn7yQaG37BvWnhZiGs",
  authDomain: "plateforme-96b58.firebaseapp.com",
  databaseURL: "https://plateforme-96b58.firebaseio.com",
  projectId: "plateforme-96b58",
  storageBucket: "plateforme-96b58.appspot.com",
  messagingSenderId: "198670684474",
  appId: "1:198670684474:web:ad5448b601c3c534000003",
  measurementId: "G-KZ89B3S9VM"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

const docRef = firestore.doc("01juin/16h");

const input = document.querySelector("#entry");
const send = document.querySelector("#go");

send.addEventListener("click", function() {
  const textToSave = input.value;
  console.log("l'envoi est " + textToSave);
  docRef.set({
    aĝe: textToSave

  }).then(function() {
    console.log("envoyé!");
  }).then(function (error) {
    console.log("got an error", error);
 });
 });
