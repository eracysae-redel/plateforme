
// La fonction getUserId vient récupérer la première lettre du prénom et le nom pour créer un seul ID.
function getUserId() {

  if(document.getElementById('fName').value && document.getElementById('name').value ) {

    const firstLetter = document.getElementById('fName').value.substring(0, 1).toUpperCase();
    const name = document.getElementById('name').value.toUpperCase();
    const userId = firstLetter + name;

    return userId;

  } else {

      return 0;

  }

}

// La fonction writeUserData() vérifie l'existence ou pas d'un id, si ce dernier n'existes pas les informations sont envoyées à la BDD.
// Un id unique est créer en combinant le getUserID() + la ref. client.
function writeUserData() {

  const userId = getUserId();
  const refClient = document.getElementById('refClient').value;

  var db = firebase.database();

  db.ref().child('users/').orderByChild("id").equalTo(userId + refClient).once("value",snapshot => {
      if (snapshot.exists()) {

          alert('Utilisateur déjà existant !');
          return 0;

      } else {
          db.ref('users/').child(userId).set(null);
          db.ref('users/' + userId).child("id").set(userId + refClient);
          db.ref('users/' + userId).child('Situation 1').set(null);
          const ref = db.ref("users/" + userId + "/situation 1");

          db.ref(ref).set({
              "nom": document.getElementById('name').value,
              "prenom": document.getElementById('fName').value,
              "civilite": document.getElementById('gender').value,
              "nomDeNaissance": document.getElementById('bName').value,
              "refClient": document.getElementById('refClient').value,
              "typeClient": document.getElementById('clientType').value,
              "dateNaissance": document.getElementById('birthday').value,
              "departementNaissance": document.getElementById('bDpt').value,
              "adresse": document.getElementById('address').value,
              "codePostal": document.getElementById('postal').value,
              "ville": document.getElementById('city').value,
              "pays": document.getElementById('country').value,
              "telFixe": document.getElementById('hTel').value,
              "telMobile": document.getElementById('codePhone').value + document.getElementById('mTel').value,
              "mail": document.getElementById('email').value,
              "residenceFiscale": document.getElementById('rCountry').value
          });
      }
  });
}


// évènement d'envoie des données au clic du bouton sauvegarder (id : submit).
const submit = document.getElementById('submit');

submit.addEventListener('click',function (){

    writeUserData();

});

