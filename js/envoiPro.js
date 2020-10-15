function writeUserPro () {

    const user = sessionStorage.getItem('userId');
    const conjoint = sessionStorage.getItem('mariage');
    const toggle = document.getElementById('dirigeant');
    const toggleConjoint = document.getElementById('conjointDirigeant');
    db.ref('users/' + user).child('Situation Professionnelle').set(null);

    if(conjoint === 'Mariage' || conjoint === 'Pacs') {
        if(toggle.checked && toggleConjoint.checked) {
            db.ref('users/' + user + '/Situation Professionnelle').child('Situation Client').set({
                'Situation Actuelle' : document.getElementById('situationPro').value,
                'Metier' : document.getElementById('metier').value,
                'Denomination Entreprise' : document.getElementById('nomEntreprise').value,
                'Forme Juridique' : document.getElementById('formeJuridiqueEntreprise').value,
                'Adresse Entrprise' : document.getElementById('adresseEntreprise').value
            });

            db.ref('users/' + user + '/Situation Professionnelle').child('Situation Conjoint(e)').set({
                'Situation Actuelle' : document.getElementById('situationProConjointe').value,
                'Métier' : document.getElementById('metierConjoint').value,
                'Denomination Enreprise' : document.getElementById('nomEntrepriseConjoint').value,
                'Forme Juridique' : document.getElementById('formeJuridiqueEntrepriseConjoint').value,
                'Adresse Entreprise' : document.getElementById('formeJuridiqueEntrepriseConjoint').value,
            });

            if(document.getElementById('infoPro').value) {
                db.ref('users/' + user + '/Situation Professionnelle').child('Informations Supplémentaires').set({
                    'Informations' : document.getElementById('infoPro').value
                });
            }

        } else if (toggle.checked && !toggleConjoint.checked) {

            db.ref('users/' + user + '/Situation Professionnelle').child('Situation Client').set({
                'Situation Actuelle' : document.getElementById('situationPro').value,
                'Metier' : document.getElementById('metier').value,
                'Denomination Entreprise' : document.getElementById('nomEntreprise').value,
                'Forme Juridique' : document.getElementById('formeJuridiqueEntreprise').value,
                'Adresse Entrprise' : document.getElementById('adresseEntreprise').value
            });

            db.ref('users/' + user + '/Situation Professionnelle').child('Situation Conjoint(e)').set({
                'Situation Actuelle': document.getElementById('situationProConjointe').value,
                'Métier': document.getElementById('metierConjoint').value,
            });

            if(document.getElementById('infoPro').value) {
                db.ref('users/' + user + '/Situation Professionnelle').child('Informations Supplémentaires').set({
                    'Informations' : document.getElementById('infoPro').value
                });
            }

        } else if (!toggle.checked && toggleConjoint.checked) {

            db.ref('users/' + user + '/Situation Professionnelle').child('Situation Client').set({
                'Situation Actuelle': document.getElementById('situationPro').value,
                'Metier': document.getElementById('metier').value,
            });

            db.ref('users/' + user + '/Situation Professionnelle').child('Situation Conjoint(e)').set({
                'Situation Actuelle' : document.getElementById('situationProConjointe').value,
                'Métier' : document.getElementById('metierConjoint').value,
                'Denomination Enreprise' : document.getElementById('nomEntrepriseConjoint').value,
                'Forme Juridique' : document.getElementById('formeJuridiqueEntrepriseConjoint').value,
                'Adresse Entreprise' : document.getElementById('formeJuridiqueEntrepriseConjoint').value,
            });

            if(document.getElementById('infoPro').value) {
                db.ref('users/' + user + '/Situation Professionnelle').child('Informations Supplémentaires').set({
                    'Informations' : document.getElementById('infoPro').value
                });
            }

        } else {

            db.ref('users/' + user + '/Situation Professionnelle').child('Situation Client').set({
                'Situation Actuelle': document.getElementById('situationPro').value,
                'Metier': document.getElementById('metier').value,
            });

            db.ref('users/' + user + '/Situation Professionnelle').child('Situation Conjoint(e)').set({
                'Situation Actuelle': document.getElementById('situationProConjointe').value,
                'Métier': document.getElementById('metierConjoint').value,
            });

            if(document.getElementById('infoPro').value) {
                db.ref('users/' + user + '/Situation Professionnelle').child('Informations Supplémentaires').set({
                    'Informations' : document.getElementById('infoPro').value
                });
            }

        }

    } else {
        if (toggle.checked) {

            db.ref('users/' + user + '/Situation Professionnelle').child('Situation Client').set({
                'Situation Actuelle' : document.getElementById('situationPro').value,
                'Metier' : document.getElementById('metier').value,
                'Denomination Entreprise' : document.getElementById('nomEntreprise').value,
                'Forme Juridique' : document.getElementById('formeJuridiqueEntreprise').value,
                'Adresse Entrprise' : document.getElementById('adresseEntreprise').value
            });

            if(document.getElementById('infoPro').value) {
                db.ref('users/' + user + '/Situation Professionnelle').child('Informations Supplémentaires').set({
                    'Informations' : document.getElementById('infoPro').value
                });
            }

        } else {

            db.ref('users/' + user + '/Situation Professionnelle').child('Situation Client').set({
                'Situation Actuelle': document.getElementById('situationPro').value,
                'Metier': document.getElementById('metier').value,
            });

            if(document.getElementById('infoPro').value) {
                db.ref('users/' + user + '/Situation Professionnelle').child('Informations Supplémentaires').set({
                    'Informations' : document.getElementById('infoPro').value
                });
            }
        }
    }
}

const submitPro = document.getElementById('submitPro');

submitPro.addEventListener('click' , function (e) {

    e.preventDefault();
    writeUserPro();

});