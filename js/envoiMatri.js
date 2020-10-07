



function envoiFamille(){

    let mariage = document.getElementById('situationMatri');

    sessionStorage.setItem('mariage',mariage.value);

    if (sessionStorage.getItem('mariage') === "Mariage") {

        document.getElementById('conjointe').removeAttribute('hidden');
    }
}


const modalPro = document.getElementById('buttonPro');

modalPro.addEventListener('click',function (){

   if(sessionStorage.getItem('mariage') === "Mariage") {
       document.getElementById('conjointe').removeAttribute('hidden');
    }

});



