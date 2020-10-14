function writeUserDataFamille() {

    const user = sessionStorage.getItem('userId');

    if (document.getElementById('situationMatrimoniale').value === "Mariage") {
        db.ref('users/' + user).child('Situation Familliale').set(null)
        db.ref('users/' + user + '/Situation Familliale').child('Situation Matrimoniale').set({
            'Situation': document.getElementById('situationMatrimoniale').value,
            'Marié(e) Depuis': document.getElementById('depuisMariage').value,
            'Contrat de Mariage': document.getElementById('contratMariage').value,
            'Nom Conjoint(e)': document.getElementById('nomConjoint').value,
            'Prénom Conjoint(e)': document.getElementById('prenomConjoint').value,
            'Civilté Conjoint(e)': document.getElementById('civiliteConjoint').value,
            'Nom de naissance Conjoint(e)': document.getElementById('nomNaissanceConjoint').value,
            'Capacité Juridique Conjoint(e)': document.getElementById('capaciteJuridiqueConjoint').value,
            'Date de naissance Conjoint(e)': document.getElementById('dateNaissanceConjoint').value,
            'Ville de naissance Conjoint(e)': document.getElementById('lieuNaissanceConjoint').value
        });
    } else if (document.getElementById('situationMatrimoniale').value === "Pacs") {

        db.ref('users/' + user).child('Situation Familliale').set(null)
        db.ref('users/' + user + '/Situation Familliale').child('Situation Matrimoniale').set({
            'Situation': document.getElementById('situationMatrimoniale').value,
            'Pacsé(e) Depuis': document.getElementById('depuisPacs').value,
            'Convention du Pacs': document.getElementById('conventionPacs').value,
            'Nom Conjoint(e)': document.getElementById('nomConjoint').value,
            'Prénom Conjoint(e)': document.getElementById('prenomConjoint').value,
            'Civilté Conjoint(e)': document.getElementById('civiliteConjoint').value,
            'Nom de naissance Conjoint(e)': document.getElementById('nomNaissanceConjoint').value,
            'Capacité Juridique Conjoint(e)': document.getElementById('capaciteJuridiqueConjoint').value,
            'Date de naissance Conjoint(e)': document.getElementById('dateNaissanceConjoint').value,
            'Ville de naissance Conjoint(e)': document.getElementById('lieuNaissanceConjoint').value
        });

    } else if (document.getElementById('situationMatrimoniale').value === "Divorce") {

        db.ref('users/' + user).child('Situation Familliale').set(null)
        db.ref('users/' + user + '/Situation Familliale').child('Situation Matrimoniale').set({
            'Situation': document.getElementById('situationMatrimoniale').value,
            'Divorcé(e) Depuis': document.getElementById('depuisDivorce').value,
        });
    } else {
        db.ref('users/' + user).child('Situation Familliale').set(null)
        db.ref('users/' + user + '/Situation Familliale').child('Situation Matrimoniale').set({
                    'Situation': document.getElementById('situationMatrimoniale').value,
        });
    }

    if (counter >= 0) {

    }


}

const submitFamille = document.getElementById('submitFamille');

submitFamille.addEventListener('click', function (e) {

    e.preventDefault();
    let valueMary = document.getElementById('situationMatrimoniale').value;
    sessionStorage.setItem('mariage',valueMary);
    writeUserDataFamille();

});

const modalPro = document.getElementById('buttonPro');

modalPro.addEventListener('click',function (e){

    if(sessionStorage.getItem('mariage') === "Mariage") {
        document.getElementById('conjointe').removeAttribute('hidden');
    }

});



