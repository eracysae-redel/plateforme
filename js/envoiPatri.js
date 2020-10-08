const buttons = document.querySelectorAll('#selectButton button');

function selectButton () {
    for (let i = 0; i<buttons.length; i++) {
        buttons[i].addEventListener('click',function (){
           for (let j = 0; j<buttons.length; j++) {
               if(i == j){
                   buttons[j].setAttribute('id','testButton');
                   buttons[j].setAttribute('class','choisi btn btn-outline-primary');
               } else {
                   buttons[j].removeAttribute('id');
                   buttons[j].setAttribute('class','btn btn-outline-primary');
               }
           }
        });
    }
}

