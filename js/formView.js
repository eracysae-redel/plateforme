
const situation = document.getElementById("situationMatri");

situation.addEventListener("change",function (e){

    if (e.target.value === "Mariage" || e.target.value === "Divorcé" || e.target.value === "Pacs"  ) {
        document.getElementById('dateSituation').removeAttribute("hidden");
        document.getElementById('depuis').removeAttribute("hidden");
    } else {
        document.getElementById('dateSituation').setAttribute("hidden",true);
        document.getElementById('depuis').setAttribute("hidden",true);
    }
});

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

let counter = 1;

function supprChildren(child){

    const id = child.id;
    for(let i = 1; i<=counter; i++) {
        if(id === 'addChild'+i) {
            const parent = document.getElementById('enfants');
            const enfant = document.getElementById('marmot'+counter);
            parent.removeChild(enfant);
            break;
        }
    }
}

function addChildren(){

    const target = document.getElementById("enfants");
    const div = document.createElement('div');
    div.setAttribute('id','marmot'+counter);
    let content = '<div class="card bg-light" style="max-width: 30rem;">\n' +
        '          <div class="card-header">\n' +
        '            <div class="row">\n' +
        '            <div class="col-10">\n' +
        '              <h5>Enfant '+counter+'</h5>\n' +
        '            </div>\n' +
        '            <div class="col-1">\n' +
        '              <svg id="addChild'+counter+'" onclick="supprChildren(this)" width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-x-circle-fill" fill="red" xmlns="http://www.w3.org/2000/svg">\n' +
        '              <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>\n' +
        '              </svg>\n' +
        '            </div>\n' +
        '          </div>\n' +
        '          </div>\n' +
        '          <div class="card-body">\n' +
        '            <p>Informations : </p>\n' +
        '            <div class="row mb-2">\n' +
        '              <div class="col">\n' +
        '                <input class="form-control form-control-sm" type="text" placeholder="Nom">\n' +
        '              </div>\n' +
        '              <div class="col">\n' +
        '                <input class="form-control form-control-sm" type="text" placeholder="Prénom">\n' +
        '              </div>\n' +
        '            </div>\n' +
        '            <div class="row mb-2">\n' +
        '              <div class="col">\n' +
        '                <input class="form-control form-control-sm" type="text" placeholder="Lieu Naissance">\n' +
        '              </div>\n' +
        '              <div class="col">\n' +
        '                <input id="dateNaissanceEnfant1" placeholder="Date Naissance" class="form-control form-control-sm" type="text" onfocus="(this.type=\'date\')">\n' +
        '              </div>\n' +
        '            </div>\n' +
        '            <div class="row mt-4 mb-2">\n' +
        '              <div class="col">\n' +
        '                <p>Lien de parenté:</p>\n' +
        '              </div>\n' +
        '              <div class="col">\n' +
        '                <select class="form-control form-control-sm" id="">\n' +
        '                  <option value="" selected disabled>Non renseigné</option>\n' +
        '                  <option>Enfant du couple</option>\n' +
        '                  <option>Enfant de votre conjointe uniquement</option>\n' +
        '                  <option>Votre enfant uniquement</option>\n' +
        '                </select>\n' +
        '              </div>\n' +
        '            </div>\n' +
        '            <div class="row mt-4 mb-2">\n' +
        '              <div class="col-8">\n' +
        '                <p>Dépent il/elle de votre foyer fiscal?</p>\n' +
        '              </div>\n' +
        '              <div class="col">\n' +
        '                  <input type="checkbox" data-size="sm" checked data-toggle="toggle" data-on="Oui" data-off="Non" data-onstyle="success" data-offstyle="danger">\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <div class="row mb-2">\n' +
        '              <div class="col">\n' +
        '\n' +
        '              </div>\n' +
        '\n' +
        '            </div>\n' +
        '\n' +
        '          </div>\n' +
        '        </div>\n' +
        '      </div>'


    div.innerHTML = content;
    target.appendChild(div);
    counter++;

}

const buttonEnfant = document.getElementById('addEnfant');

buttonEnfant.addEventListener('click',function (){

    addChildren();

});
