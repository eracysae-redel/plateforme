function writeUserPro () {

    const user = sessionStorage.getItem('userId');
    const conjoint = sessionStorage.getItem('mariage');
    db.ref('users/' + user).child('Situation Professionnelle').set(null);

    if(conjoint === 'Mariage' || conjoint === 'Pacs') {

    } else {

    }


}

const submitPro = document.getElementById('submitPro');

submitPro.addEventListener('click' , function (e) {

    e.preventDefault();
    writeUserPro();

})