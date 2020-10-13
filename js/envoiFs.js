const db = firebase.database();


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

    db.ref('users/').child(userId).set(null);
    db.ref('users/' + userId).child('Etat Civil').set(null);
    db.ref('users/' + userId + '/Etat Civil').child('Identité').set(null);

    const identite = db.ref("users/" + userId + "/Etat Civil/Identité");

    db.ref(identite).set({
        "Nom": document.getElementById('nom').value,
        "Prénom": document.getElementById('prenom').value,
        "Civilité": document.getElementById('civilite').value,
        "Nom de Naissance": document.getElementById('nomNaissance').value,
        "Capacité Juridique": document.getElementById('capaciteJuridique').value
    });

    db.ref('users/' + userId + '/Etat Civil').child('Naissance').set(null);
    const naissance = db.ref("users/" + userId + "/Etat Civil/Naissance");
    db.ref(naissance).set({
        "Date de Naissance": document.getElementById('dateNaissance').value,
        "Lieu de Naissance": document.getElementById('lieuNaissance').value,
    });

    db.ref('users/' + userId + '/Etat Civil').child('Coordonnées').set(null);
    const coordonnees = db.ref("users/" + userId + "/Etat Civil/Coordonnées");
    db.ref(coordonnees).set({
        "Adresse": document.getElementById('adresse').value,
        "Code Postal": document.getElementById('adresseCP').value,
        "Ville": document.getElementById('adresseVille').value,
        "Pays": document.getElementById('adressePays').value,
        "Téléphone Fixe": document.getElementById('telFixe').value,
        "Téléphone Mobile": document.getElementById('telPortable').value,
        "Courriel": document.getElementById('courriel').value,
        "Résidence Fiscale": document.getElementById('residenceFiscale').value
    });
}

const submit = document.getElementById('submitCivil');

submit.addEventListener('click',function () {

    const userId = getUserId();
    sessionStorage.setItem('userId',userId);
    writeUserData();

});


