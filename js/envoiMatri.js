function writeUserDataFamille() {

    const userId = sessionStorage.getItem('userId');

    db.ref('users/' + userId).child('Situation Familliale').set(null);
    db.ref('users/' + userId + '/Etat Civil').child('Situation Matrimoniale').set(null);

    const situationMatri = db.ref("users/" + userId + "/Situation Familliale/Situation Matrimoniale");

    if (document.getElementById('situationMatrimoniale').value === "Mariage") {
        db.ref(situationMatri).set({
            'Situation' : document.getElementById('situationMatrimoniale'),
            'Marié(e) Depuis' : document.getElementById('depuisMariage'),
            'Contrat de Mariage' : document.getElementById('contratMariage'),
            'Nom Conjoint(e)' : document.getElementById('nomConjoint'),
            'Prénom Conjoint(e)' : document.getElementById('prenomConjoint'),
            'Civilté Conjoint(e)' : document.getElementById('civiliteConjoint'),
            'Nom de naissance Conjoint(e)' : document.getElementById('nomNaissanceConjoint'),
            'Capacité Juridique Conjoint(e)' : document.getElementById('capaciteJuridiqueConjoint'),
            'Date de naissance Conjoint(e)' : document.getElementById('dateNaissanceConjoint'),
            'Ville de naissance Conjoint(e)' : document.getElementById('lieuNaissanceConjoint')
        });

    } else if (document.getElementById('situationMatrimoniale').value === "Pacs") {

        db.ref(situationMatri).set({
            'Situation' : document.getElementById('situationMatrimoniale'),
            'Pacsé(e) Depuis' : document.getElementById('depuisPacs'),
            'Convention du Pacs' : document.getElementById('conventionPacs'),
            'Nom Conjoint(e)' : document.getElementById('nomConjoint'),
            'Prénom Conjoint(e)' : document.getElementById('prenomConjoint'),
            'Civilté Conjoint(e)' : document.getElementById('civiliteConjoint'),
            'Nom de naissance Conjoint(e)' : document.getElementById('nomNaissanceConjoint'),
            'Capacité Juridique Conjoint(e)' : document.getElementById('capaciteJuridiqueConjoint'),
            'Date de naissance Conjoint(e)' : document.getElementById('dateNaissanceConjoint'),
            'Ville de naissance Conjoint(e)' : document.getElementById('lieuNaissanceConjoint')
        });

    } else if (document.getElementById('divorce').value === "Divorce") {

        db.ref(situationMatri).set({
            'Situation' : document.getElementById('situationMatrimoniale'),
            'Divorcé(e) Depuis' : document.getElementById('depuisDivorce'),
        });
    }
}

const submitFamille = document.getElementById('submitFamille');

submitFamille.addEventListener('click', function () {

    let mariage = document.getElementById('situationMatrimoniale').value;
    sessionStorage.setItem('mariage',mariage);
    writeUserDataFamille();

});

const modalPro = document.getElementById('buttonPro');

modalPro.addEventListener('click',function (e){

    if(sessionStorage.getItem('mariage') === "Mariage") {
        document.getElementById('conjointe').removeAttribute('hidden');
    }

});



