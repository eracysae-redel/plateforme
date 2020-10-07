



function envoiFamille(){

    let mariage = document.getElementById('situationMatri').value;
    sessionStorage.setItem('mariage',mariage);

}


const modalPro = document.getElementById('buttonPro');

modalPro.addEventListener('click',function (e){

   if(sessionStorage.getItem('mariage') === "Mariage") {
       document.getElementById('conjointe').removeAttribute('hidden');
    }

});



