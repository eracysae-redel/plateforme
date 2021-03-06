function getUserId() {

    if (document.getElementById('nom').value && document.getElementById('prenom').value) {

        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                return user.uid;
            } else {
                return 0;
            }
        });
    }
}

function writeUserData() {

    const userChild = getUserId();

    db.ref('users/').child(userChild).set({
        "EtatCivil" : {
            "Identité": {
                "Nom": document.getElementById('nom').value,
                "Prénom": document.getElementById('prenom').value,
                "Civilité": document.getElementById('civilite').value,
                "NomdeNaissance": document.getElementById('nomNaissance').value,
                "CapacitéJuridique": document.getElementById('capaciteJuridique').value,
            },

            "Naissance": {
                "DatedeNaissance": document.getElementById('dateNaissance').value,
                "LieudeNaissance": document.getElementById('lieuNaissance').value,
            },

            "Coordonnées": {
                "Adresse": document.getElementById('adresse').value,
                "Code Postal": document.getElementById('adresseCP').value,
                "Ville": document.getElementById('adresseVille').value,
                "Pays": document.getElementById('adressePays').value,
                "TéléphoneFixe": document.getElementById('telFixe').value,
                "TéléphoneMobile": document.getElementById('telPortable').value,
                "Courriel": document.getElementById('courriel').value,
                "RésidenceFiscale": document.getElementById('residenceFiscale').value,
            }
        }
    });
}

const submit = document.getElementById('submitCivil');

submit.addEventListener('click',function (e) {

    const getUser = getUserId();
    sessionStorage.setItem('userId',getUser);
    e.preventDefault();
    writeUserData();

});


