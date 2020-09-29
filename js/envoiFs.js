

function getClientType () {

  if(document.getElementById('option1').value) {

      return document.getElementById('option1').value;

  } else if (document.getElementById('option2').value){

      return document.getElementById('option2').value;
  } else {

    return 0;
  }
}

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
  const clientType = getClientType();

  var db = firebase.database();

  db.ref('users/').child(userId).set(null);
  db.ref('users/'+userId).child('Situation 1').set(null);

  const ref = db.ref("users/"+userId+"/situation 1");

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
        "telMobile": document.getElementById('mTel').value,
        "mail": document.getElementById('email').value,
        "residenceFiscale": document.getElementById('rCountry').value
  });
}

const submit = document.getElementById('submit');

submit.addEventListener('click',function () {

    writeUserData();

})

