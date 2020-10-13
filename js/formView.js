
const situation = document.getElementById("situationMatri");

situation.addEventListener("change",function (e){

    const mariage = document.getElementById('mariage');
    const pacs = document.getElementById('pacs');
    const divorce = document.getElementById('divorce')
    const infoConjoint = document.getElementById('infoConjoint')

    switch (e.target.value) {
        case "Mariage" :
            mariage.removeAttribute("hidden");
            infoConjoint.removeAttribute("hidden");
            pacs.setAttribute("hidden",true);
            divorce.setAttribute('hidden',true);
            break;

        case "Pacs" :
            pacs.removeAttribute("hidden");
            infoConjoint.removeAttribute("hidden");
            mariage.setAttribute("hidden",true);
            divorce.setAttribute('hidden',true);
            break;

        case "Divorcé" :
            divorce.removeAttribute("hidden");
            pacs.setAttribute("hidden",true);
            mariage.setAttribute('hidden',true);
            infoConjoint.setAttribute("hidden",true);
            break;

        default :
            mariage.setAttribute("hidden",true);
            infoConjoint.setAttribute("hidden",true);
            pacs.setAttribute("hidden",true);
            divorce.setAttribute('hidden',true);
            break;
    }
});

let counter = 0;

function supprChildren(child){


    const id = child.id;
    for(let i = 1; i<=counter; i++) {
        if(id === 'addChild'+i) {

            const parent = document.getElementById('enfants');
            const enfant = document.getElementById('marmot' + i);
            parent.removeChild(enfant);
            counter--;

            if(counter !== 0) {
                for (let j = i; j <= counter; j++) {
                    if (counter === 1) {
                        document.getElementById('addChild' + (j+1)).setAttribute('id', 'addChild1');
                        document.getElementById('marmot' + (j+1)).setAttribute('id', 'marmot1');
                        document.getElementById('hName' + (j+1)).innerHTML = 'Enfant 1';
                        document.getElementById('hName' + (j+1)).setAttribute('id','hName1');
                        break;

                    } else {

                        document.getElementById('addChild' + (j + 1)).setAttribute('id', 'addChild' + j);
                        document.getElementById('marmot' + (j + 1)).setAttribute('id', 'marmot' + j);
                        document.getElementById('hName' + (j + 1)).innerHTML = 'Enfant ' + j;
                        document.getElementById('hName' + (j +1)).setAttribute('id','hName' + j);
                    }
                }

                break;
            }
        }
    }
}

function addChildren(){

    counter++;
    const nom = 'Enfant ';
    const target = document.getElementById("enfants");
    const div = document.createElement('div');
    div.setAttribute('id','marmot'+counter);
    div.setAttribute('class','card');

    let content = '<div class="card-header">\n' +
        '    <div class="row">\n' +
        '        <div class="col-10">\n' +
        '            <h5 id="hName'+counter+'">Enfant '+counter+'</h5>\n' +
        '        </div>\n' +
        '        <div class="col-1">\n' +
        '            <svg id="addChild'+counter+'" onclick="supprChildren(this)" width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-x-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n' +
        '                <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>\n' +
        '                <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>\n' +
        '            </svg>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div>\n' +
        '    <div class="card-body">\n' +
        '        <p>Informations : </p>\n' +
        '        <div class="row mb-2">\n' +
        '            <div class="col">\n' +
        '                <input class="form-control form-control-sm" type="text" placeholder="Nom">\n' +
        '            </div>\n' +
        '            <div class="col">\n' +
        '                <input class="form-control form-control-sm" type="text" placeholder="Prénom">\n' +
        '            </div>\n' +
        '        </div>\n' +
        '        <div class="row mb-2">\n' +
        '            <div class="col">\n' +
        '                <input class="form-control form-control-sm" type="text" placeholder="Lieu Naissance">\n' +
        '            </div>\n' +
        '            <div class="col">\n' +
        '                <input id="dateNaissanceEnfant1" placeholder="Date Naissance" class="form-control form-control-sm" type="text" onfocus="(this.type=\'date\')">\n' +
        '            </div>\n' +
        '        </div>\n' +
        '        <div class="row mt-4 mb-2">\n' +
        '            <div class="col">\n' +
        '                <p>Lien de parenté:</p>\n' +
        '            </div>\n' +
        '            <div class="col">\n' +
        '                <select class="form-select form-select-sm" id="">\n' +
        '                    <option value="" selected="" disabled="">Non renseigné</option>\n' +
        '                    <option>Enfant du couple</option>\n' +
        '                    <option>Enfant de votre conjointe uniquement</option>\n' +
        '                    <option>Votre enfant uniquement</option>\n' +
        '                </select>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '        <div class="row my-3 ml-1">\n' +
        '            <div class="form-check form-switch">\n' +
        '                <input class="form-check-input" type="checkbox" id="foyerfical">\n' +
        '                <label class="form-check-label" for="foyerfical">Dépent il/elle de votre foyer fiscal?</label>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '\n' +
        '    </div>'
    div.innerHTML = content;
    target.appendChild(div);

}


const buttonEnfant = document.getElementById('addEnfant');

buttonEnfant.addEventListener('click',function (){

    addChildren();

});


const toggleDirigeant = document.getElementById('dirigeant');

toggleDirigeant.addEventListener('change',function (){

    if (toggleDirigeant.checked) {
        document.getElementById('clientEntreprise').removeAttribute('hidden');
    } else {
        document.getElementById('clientEntreprise').setAttribute('hidden','true');
    }

});

const toggleConjoint = document.getElementById('conjointDirigeant');

toggleConjoint.addEventListener('change',function (){

    if (toggleConjoint.checked) {
        document.getElementById('conjointEntreprise').removeAttribute('hidden');
    } else {
        document.getElementById('conjointEntreprise').setAttribute('hidden',true);
    }
});


