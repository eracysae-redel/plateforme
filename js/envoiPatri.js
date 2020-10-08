const buttons = document.querySelectorAll('#selectButton button');

function selectButton () {
    for (let i = 0; i<buttons.length; i++) {
        buttons[i].addEventListener('click',function (){
           for (let j = 0; j<buttons.length; j++) {
               if(i == j){
                   buttons[j].setAttribute('id','testButton');
               } else {
                   buttons[j].removeAttribute('id');
               }
           }
        });
    }
}

function hendeck(e) {

    alert(e);
}

const submitB = document.getElementById('save');

submitB.addEventListener('click',function (){


    hendeck(document.getElementById('testButton').value);

})