




// La fonction getUserId vient récupérer la première lettre du prénom et le nom pour créer un seul ID.
function getUserId() {

  if(document.getElementById('nom').value && document.getElementById('prenom').value ) {

    const firstLetter = document.getElementById('nom').value.substring(0, 1).toUpperCase();
    const name = document.getElementById('prenom').value.toUpperCase();
    const userId = firstLetter + name;

    return userId;

  } else {
      return 0;
  }

}

function writeUserData() {

    const userId = getUserId();

    var db = firebase.database();

    db.ref().child('users/').orderByChild("id").equalTo(userId).once("value", snapshot => {
        if (snapshot.exists()) {

            alert('Utilisateur déjà existant !');
            return 0;

        } else {
            db.ref('users/').child(userId).set(null);
            db.ref('users/' + userId).child("id").set(userId);
            db.ref('users/' + userId).child('Identite').set(null);
            const identite = db.ref("users/" + userId + "Identite");

            db.ref(identite).set({
                "nom": document.getElementById('nom').value,
                "prenom": document.getElementById('prenom').value,
                "civilite": document.getElementById('civilite').value,
                "nomDeNaissance": document.getElementById('nomNaissance').value,
                "capaciteJuridique": document.getElementById('capaciteJuridique').value
            });

            db.ref('users/' + userId).child('Naissance').set(null);
            const naissance = db.ref("users/" + userId + "Naissance");
            db.ref(naissance).set({
                "dateNaissance": document.getElementById('dateNaissance').value,
                "lieuNaissance": document.getElementById('lieuNaissance').value,
            });
            db.ref('users/' + userId).child('Coordonnees').set(null);
            const coordonnees = db.ref("users/" + userId + "Coordonnees");
            db.ref(coordonnees).set({
                "adresse": document.getElementById('adresse').value,
                "codePostal": document.getElementById('adresseCP').value,
                "ville": document.getElementById('adresseVille').value,
                "pays": document.getElementById('adressePays').value,
                "telFixe": document.getElementById('telFixe').value,
                "telMobile": document.getElementById('telPortable').value,
                "mail": document.getElementById('courriel').value,
                "residenceFiscale": document.getElementById('residenceFiscale').value
            });
        }
    });
}

const submit = document.getElementById('submitCivil');

submit.addEventListener('click',function () {

    writeUserData();

});


