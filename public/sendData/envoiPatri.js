function writeUserPatri () {

    const user = sessionStorage.getItem('userId');
    db.ref('users/' + user).child('Situation Patrimoniale').set(null);
    db.ref('users/' + user + '/Situation Patrimoniale').child('Revenus').set({
        'Revenus annuels' : revenuAnnuel.value
    });

    db.ref('users/' + user + '/Situation Patrimoniale').child('Patrimoine').set({
        'Estimation patrimoine ' : patrimoineAnnuel.value
    });

    db.ref('users/' + user + '/Situation Patrimoniale').child('Dettes').set({
        'Estimation dettes ' : detteAnnuel.value
    });

    db.ref('users/' + user + '/Situation Patrimoniale').child('Repartition Patrimoine').set({
        'Actifs financiers' : document.getElementById('charge1').value + '%',
        'Actifs immobilliers' : document.getElementById('charge2').value + '%',
        'Actifs professionnels' : document.getElementById('charge3').value + '%',
        'Autres' : document.getElementById('charge4').value + '%'
    });

    db.ref('users/' + user + '/Situation Patrimoniale').child('IFI').set({
        'Redevable IFI' : ifi.value
    });

    db.ref('users/' + user + '/Situation Patrimoniale').child('Charges').set({
        'Charges par mois' : document.getElementById('chargeEngagement').value + '€'
    });

    db.ref('users/' + user + '/Situation Patrimoniale').child('Capacité Epargne').set({
        'Capacité épargne par mois ' : document.getElementById('capaciteEpargne').value + '€'
    });
}



const submitPatri = document.getElementById('submitPatri');
submitPatri.addEventListener('click', function (e) {
   e.preventDefault();
   writeUserPatri();
});