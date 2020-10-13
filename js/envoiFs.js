




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

function sendCivil (){

    let erreurInput;
    let erreurSelect;
    const form = document.getElementById('formCivil');
    const inputs = form.getElementsByTagName('input');
    const selects = form.getElementsByTagName('select');
    for (let i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
            erreurInput = "Veuillez renseigner tous les champs !";
        }
    }

    for (let i = 0; i < selects.length; i++) {
        if (!selects[i].value) {
            erreurSelect = "Veuillez séléctionner tous les champs !";
        }
    }

    if (erreurInput) {
        alert('OLA !');
        e.preventDefault();
        document.getElementById('erreurInput').innerHTML = erreurInput;
        return false;
    } else if (erreurSelect) {
        e.preventDefault();
        document.getElementById('erreurSelect').innerHTML = erreurSelect;
        return false;
    }
    else {
        alert('Formulaire envoyé !');
        writeUserData();
        return true;
    }
}


// La fonction writeUserData() vérifie l'existence ou pas d'un id, si ce dernier n'existes pas les informations sont envoyées à la BDD.
// Un id unique est créer en combinant le getUserID() + la ref. client.


