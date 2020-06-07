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

// Authentification par un lien e-mail.

// Confirmation du protocol d'authentification par un lien e-mail.
if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
  // Des paramètres d'état supplémentaires peuvent également être transmis via l'URL.
  // Ceci peut être utilisé pour continuer l'action prévue par l'utilisateur avant le déclenchement l'opération de connexion.
  // Obtenez l'e-mail si disponible. Cela devrait être disponible si l'utilisateur termine le flux sur le même périphérique où ils l'ont démarré.

  var email = window.localStorage.getItem('emailForSignIn');
  if (!email) {
    // L'utilisateur a ouvert le lien sur un autre appareil. Pour empêcher la fixation de la session
    // attaques, demandez à l'utilisateur de fournir à nouveau l'e-mail associé. Par exemple:
    email = window.prompt('Veuillez entrer votre adresse email pour confirmation');
  }
  // Le SDK client analysera le code du lien pour vous.
  firebase.auth().signInWithEmailLink(email, window.location.href)
    .then(function(result) {
      // Efface les e-mails du stockage.
      window.localStorage.removeItem('emailForSignIn');
      // Vous pouvez accéder au nouvel utilisateur via : result.user
      // Profil d'informations utilisateur supplémentaire non disponible via: result.additionalUserInfo.profile == null
      // Vous pouvez vérifier si l'utilisateur est nouveau ou existant: result.additionalUserInfo.isNewUser

    })
    .catch(function(error) {
      // Une erreur s'est produite, vous pouvez inspecter le code: error.code
      // Les erreurs courantes peuvent être des e-mails non valides et des OTP non valides ou expirés.

    });
    // Deconnection.
    firebase.auth().signOut().then(function() {

    }).catch(function(error) {

    });

}


firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

const docRef = firestore.doc("01juin/16h");

const input = document.querySelector("#entry");
const send = document.querySelector("#go");

send.addEventListener("click", function() {
  const textToSave = input.value;
  console.log("l'envoi est" + textToSave);
  docRef.set({
    aĝe: textToSave

  }).then(function() {
    console.log("envoyé!");
  }).then(function (error) {
    console.log("got an error", error);
 });

 // Data Picker Initialization
$('.datepicker').datepicker();
 });

})
