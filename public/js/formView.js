
const situation = document.getElementById("situationMatrimoniale");

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
            document.getElementById('depuisMariage').setAttribute('required','true');
            document.getElementById('depuisDivorce').removeAttribute('required');
            document.getElementById('depuisPacs').removeAttribute('required');
            document.getElementById('contratMariage').setAttribute('required','true');
            document.getElementById('conventionPacs').removeAttribute('required');
            document.getElementById('nomConjoint').setAttribute('required','true');
            document.getElementById('prenomConjoint').setAttribute('required','true');
            document.getElementById('civiliteConjoint').setAttribute('required','true');
            document.getElementById('nomNaissanceConjoint').setAttribute('required','true');
            document.getElementById('capaciteJuridiqueConjoint').setAttribute('required','true');
            document.getElementById('dateNaissanceConjoint').setAttribute('required','true');
            document.getElementById('lieuNaissanceConjoint').setAttribute('required','true');
            break;

        case "Pacs" :
            pacs.removeAttribute("hidden");
            infoConjoint.removeAttribute("hidden");
            mariage.setAttribute("hidden",true);
            divorce.setAttribute('hidden',true);
            document.getElementById('depuisPacs').setAttribute('required','true');
            document.getElementById('depuisMariage').removeAttribute('required');
            document.getElementById('depuisDivorce').removeAttribute('required');
            document.getElementById('conventionPacs').setAttribute('required','true');
            document.getElementById('contratMariage').removeAttribute('required');
            document.getElementById('nomConjoint').setAttribute('required','true');
            document.getElementById('prenomConjoint').setAttribute('required','true');
            document.getElementById('civiliteConjoint').setAttribute('required','true');
            document.getElementById('nomNaissanceConjoint').setAttribute('required','true');
            document.getElementById('capaciteJuridiqueConjoint').setAttribute('required','true');
            document.getElementById('dateNaissanceConjoint').setAttribute('required','true');
            document.getElementById('lieuNaissanceConjoint').setAttribute('required','true');
            break;

        case "Divorce" :
            divorce.removeAttribute("hidden");
            pacs.setAttribute("hidden",true);
            mariage.setAttribute('hidden',true);
            infoConjoint.setAttribute("hidden",true);
            document.getElementById('depuisDivorce').setAttribute('required','true');
            document.getElementById('depuisMariage').removeAttribute('required');
            document.getElementById('depuisPacs').removeAttribute('required');
            document.getElementById('conventionPacs').removeAttribute('required');
            document.getElementById('contratMariage').removeAttribute('required');
            document.getElementById('nomConjoint').removeAttribute('required');
            document.getElementById('prenomConjoint').removeAttribute('required');
            document.getElementById('civiliteConjoint').removeAttribute('required');
            document.getElementById('nomNaissanceConjoint').removeAttribute('required');
            document.getElementById('capaciteJuridiqueConjoint').removeAttribute('required');
            document.getElementById('dateNaissanceConjoint').removeAttribute('required');
            document.getElementById('lieuNaissanceConjoint').removeAttribute('required');
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
                        document.getElementById('nomEnfant' + (j +1)).setAttribute('id','nomEnfant1');
                        document.getElementById('prenomEnfant' + (j +1)).setAttribute('id','prenomEnfant1');
                        document.getElementById('lieuNaissanceEnfant' + (j +1)).setAttribute('id','lieuNaissanceEnfant1');
                        document.getElementById('dateNaissanceEnfant' + (j +1)).setAttribute('id','dateNaissanceEnfant1');
                        document.getElementById('lienParenteEnfant' + (j +1)).setAttribute('id','lienParenteEnfant1');
                        document.getElementById('foyerFiscal' + (j +1)).setAttribute('id','foyerFiscal1');
                        document.getElementById('foyerFiscal' + (j +1)).setAttribute('for','foyerFiscal1');
                        break;

                    } else {

                        document.getElementById('addChild' + (j + 1)).setAttribute('id', 'addChild' + j);
                        document.getElementById('marmot' + (j + 1)).setAttribute('id', 'marmot' + j);
                        document.getElementById('hName' + (j + 1)).innerHTML = 'Enfant ' + j;
                        document.getElementById('hName' + (j+1)).setAttribute('id','hName' + j);
                        document.getElementById('nomEnfant' + (j +1)).setAttribute('id','nomEnfant' + j);
                        document.getElementById('prenomEnfant' + (j +1)).setAttribute('id','prenomEnfant' + j);
                        document.getElementById('lieuNaissanceEnfant' + (j +1)).setAttribute('id','lieuNaissanceEnfant' + j);
                        document.getElementById('dateNaissanceEnfant' + (j +1)).setAttribute('id','dateNaissanceEnfant' + j);
                        document.getElementById('lienParenteEnfant' + (j +1)).setAttribute('id','lienParenteEnfant' + j);
                        document.getElementById('foyerFiscal' + (j +1)).setAttribute('id','foyerFiscal' + j);
                        document.getElementById('foyerFiscal' + (j +1)).setAttribute('for','foyerFiscal' + j);
                    }
                }

                break;
            }
        }
    }
}

function addChildren(){

    counter++;
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
        '                <input id="nomEnfant'+ counter + '" class="form-control form-control-sm" type="text" placeholder="Nom">\n' +
        '            </div>\n' +
        '            <div class="col">\n' +
        '                <input id="prenomEnfant'+ counter + '"class="form-control form-control-sm" type="text" placeholder="Prénom">\n' +
        '            </div>\n' +
        '        </div>\n' +
        '        <div class="row mb-2">\n' +
        '            <div class="col">\n' +
        '                <input id="lieuNaissanceEnfant'+ counter + '" class="form-control form-control-sm" type="text" placeholder="Lieu Naissance">\n' +
        '            </div>\n' +
        '            <div class="col">\n' +
        '                <input id="dateNaissanceEnfant'+ counter + '" placeholder="Date Naissance" class="form-control form-control-sm" type="text" onfocus="(this.type=\'date\')">\n' +
        '            </div>\n' +
        '        </div>\n' +
        '        <div class="row mt-4 mb-2">\n' +
        '            <div class="col">\n' +
        '                <p>Lien de parenté:</p>\n' +
        '            </div>\n' +
        '            <div class="col">\n' +
        '                <select class="form-select form-select-sm" id="lienParenteEnfant'+ counter + '">\n' +
        '                    <option value="" selected="" disabled="">Non renseigné</option>\n' +
        '                    <option>Enfant du couple</option>\n' +
        '                    <option>Enfant de votre conjointe uniquement</option>\n' +
        '                    <option>Votre enfant uniquement</option>\n' +
        '                </select>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '        <div class="row my-3 ml-1">\n' +
        '            <div class="form-check form-switch">\n' +
        '                <input class="form-check-input" type="checkbox" id="foyerFiscal'+counter+'">\n' +
        '                <label class="form-check-label" for="foyerFical'+counter+'">Dépent il/elle de votre foyer fiscal?</label>\n' +
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

let revenuAnnuel;
const revenu1 = document.getElementById('revenu1');
const revenu2 = document.getElementById('revenu2');
const revenu3 = document.getElementById('revenu3');
const revenu4 = document.getElementById('revenu4');

revenu1.addEventListener('click', function () {
    revenuAnnuel = revenu1;
    revenuAnnuel.setAttribute('class','choisi btn btn-outline-primary');
    revenu2.setAttribute('class','btn btn-outline-primary');
    revenu3.setAttribute('class','btn btn-outline-primary');
    revenu4.setAttribute('class','btn btn-outline-primary');
});
revenu2.addEventListener('click', function () {
    revenuAnnuel = revenu2;
    revenuAnnuel.setAttribute('class','choisi btn btn-outline-primary');
    revenu1.setAttribute('class','btn btn-outline-primary');
    revenu3.setAttribute('class','btn btn-outline-primary');
    revenu4.setAttribute('class','btn btn-outline-primary');
});
revenu3.addEventListener('click', function () {
    revenuAnnuel = revenu3;
    revenuAnnuel.setAttribute('class','choisi btn btn-outline-primary');
    revenu2.setAttribute('class','btn btn-outline-primary');
    revenu1.setAttribute('class','btn btn-outline-primary');
    revenu4.setAttribute('class','btn btn-outline-primary');
});
revenu4.addEventListener('click', function () {
    revenuAnnuel = revenu4;
    revenuAnnuel.setAttribute('class','choisi btn btn-outline-primary');
    revenu2.setAttribute('class','btn btn-outline-primary');
    revenu3.setAttribute('class','btn btn-outline-primary');
    revenu1.setAttribute('class','btn btn-outline-primary');
});

let patrimoineAnnuel;
const patrimoine1 = document.getElementById('patrimoine1');
const patrimoine2 = document.getElementById('patrimoine2');
const patrimoine3 = document.getElementById('patrimoine3');
const patrimoine4 = document.getElementById('patrimoine4');
const patrimoine5 = document.getElementById('patrimoine5');

patrimoine1.addEventListener('click', function () {
    patrimoineAnnuel = patrimoine1;
    patrimoineAnnuel.setAttribute('class','choisi btn btn-outline-primary');
    patrimoine2.setAttribute('class','btn btn-outline-primary');
    patrimoine3.setAttribute('class','btn btn-outline-primary');
    patrimoine4.setAttribute('class','btn btn-outline-primary');
    patrimoine5.setAttribute('class','btn btn-outline-primary');
});

patrimoine2.addEventListener('click', function () {
    patrimoineAnnuel = patrimoine2;
    patrimoineAnnuel.setAttribute('class','choisi btn btn-outline-primary');
    patrimoine1.setAttribute('class','btn btn-outline-primary');
    patrimoine3.setAttribute('class','btn btn-outline-primary');
    patrimoine4.setAttribute('class','btn btn-outline-primary');
    patrimoine5.setAttribute('class','btn btn-outline-primary');
});

patrimoine3.addEventListener('click', function () {
    patrimoineAnnuel = patrimoine3;
    patrimoineAnnuel.setAttribute('class','choisi btn btn-outline-primary');
    patrimoine2.setAttribute('class','btn btn-outline-primary');
    patrimoine1.setAttribute('class','btn btn-outline-primary');
    patrimoine4.setAttribute('class','btn btn-outline-primary');
    patrimoine5.setAttribute('class','btn btn-outline-primary');
});

patrimoine4.addEventListener('click', function () {
    patrimoineAnnuel = patrimoine4;
    patrimoineAnnuel.setAttribute('class','choisi btn btn-outline-primary');
    patrimoine2.setAttribute('class','btn btn-outline-primary');
    patrimoine3.setAttribute('class','btn btn-outline-primary');
    patrimoine1.setAttribute('class','btn btn-outline-primary');
    patrimoine5.setAttribute('class','btn btn-outline-primary');
});

patrimoine5.addEventListener('click', function () {
    patrimoineAnnuel = patrimoine5;
    patrimoineAnnuel.setAttribute('class','choisi btn btn-outline-primary');
    patrimoine2.setAttribute('class','btn btn-outline-primary');
    patrimoine3.setAttribute('class','btn btn-outline-primary');
    patrimoine1.setAttribute('class','btn btn-outline-primary');
    patrimoine4.setAttribute('class','btn btn-outline-primary');
});

let detteAnnuel;
const dette1 = document.getElementById('dette1');
const dette2 = document.getElementById('dette2');
const dette3 = document.getElementById('dette3');
const dette4 = document.getElementById('dette4');
const dette5 = document.getElementById('dette5');

dette1.addEventListener('click', function () {
    detteAnnuel = dette1;
    detteAnnuel.setAttribute('class','choisi btn btn-outline-primary');
    dette2.setAttribute('class','btn btn-outline-primary');
    dette3.setAttribute('class','btn btn-outline-primary');
    dette4.setAttribute('class','btn btn-outline-primary');
    dette5.setAttribute('class','btn btn-outline-primary');
});

dette2.addEventListener('click', function () {
    detteAnnuel = dette2;
    detteAnnuel.setAttribute('class','choisi btn btn-outline-primary');
    dette1.setAttribute('class','btn btn-outline-primary');
    dette3.setAttribute('class','btn btn-outline-primary');
    dette4.setAttribute('class','btn btn-outline-primary');
    dette5.setAttribute('class','btn btn-outline-primary');
});

dette3.addEventListener('click', function () {
    detteAnnuel = dette3;
    detteAnnuel.setAttribute('class','choisi btn btn-outline-primary');
    dette2.setAttribute('class','btn btn-outline-primary');
    dette1.setAttribute('class','btn btn-outline-primary');
    dette4.setAttribute('class','btn btn-outline-primary');
    dette5.setAttribute('class','btn btn-outline-primary');
});

dette4.addEventListener('click', function () {
    detteAnnuel = dette4;
    detteAnnuel.setAttribute('class','choisi btn btn-outline-primary');
    dette2.setAttribute('class','btn btn-outline-primary');
    dette3.setAttribute('class','btn btn-outline-primary');
    dette1.setAttribute('class','btn btn-outline-primary');
    dette5.setAttribute('class','btn btn-outline-primary');
});

dette5.addEventListener('click', function () {
    detteAnnuel = dette5;
    detteAnnuel.setAttribute('class','choisi btn btn-outline-primary');
    dette2.setAttribute('class','btn btn-outline-primary');
    dette3.setAttribute('class','btn btn-outline-primary');
    dette4.setAttribute('class','btn btn-outline-primary');
    dette1.setAttribute('class','btn btn-outline-primary');
});

let ifi;
const ifi1 = document.getElementById('ifi1');
const ifi2 = document.getElementById('ifi2');

ifi1.addEventListener('click', function () {
    ifi = ifi1;
    ifi.setAttribute('class','choisi btn btn-outline-primary');
    ifi2.setAttribute('class','btn btn-outline-primary');
});
ifi2.addEventListener('click', function () {
    ifi = ifi2;
    ifi.setAttribute('class','choisi btn btn-outline-primary');
    ifi1.setAttribute('class','btn btn-outline-primary');
});

const baseRepartition = 100;
let repartition = 100;
let sumCpt = 0;
let cpts = [ cpt1 = 0, cpt2 = 0, cpt3 = 0, cpt4 = 0];
for (let i = 0 ; i < cpts.length ; i++) {
    document.getElementById('charge' + (i+1)).addEventListener('change', function (e) {
        cpts[i] = e.target.value;
        repartition = baseRepartition - cpts[0] - cpts[1] - cpts[2] - cpts[3];
        if(repartition === 0) {
            document.getElementById('submitPatri').removeAttribute('disabled');
        } else {
            document.getElementById('submitPatri').setAttribute('disabled', 'true');
        }
    });
}
