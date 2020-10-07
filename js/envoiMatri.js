

const mariage = document.getElementById('situationMatri');
const envoi = document.getElementById('submitFamille');

envoi.addEventListener('submit',function (){

    sessionStorage.setItem('mariage',mariage.value);
    alert(sessionStorage.getItem('mariage'));

});



