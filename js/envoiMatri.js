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

    db.ref('users/' + user + '/Situation Familliale').child('Personnes à charge').set(null);

    if (counter > 0) {
        for(let i = 1; i<=counter ; i++) {

            let toggle = '';

            if(document.getElementById('foyerFiscal'+i).checked) {
                toggle = 'Oui';
            } else {
                toggle = 'Non';
            }

            db.ref('users/' + user + '/Situation Familliale' + '/Personnes à charge').child('Enfant ' + i).set({
                'Nom' : document.getElementById('nomEnfant' + i).value,
                'Prénom': document.getElementById('prenomEnfant' + i).value,
                'Lieu de naissance': document.getElementById('lieuNaissanceEnfant' + i).value,
                'Date de naissance': document.getElementById('dateNaissanceEnfant' + i).value,
                'Lien de parenté': document.getElementById('lienParenteEnfant' + i).value,
                'Rattaché au foyer fiscal' : toggle
            });
        }
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



