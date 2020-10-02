
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
            const enfant = document.getElementById('marmot'+i);
            parent.removeChild(enfant);
            break;
        }
    }
}

function addChildren(){

    const target = document.getElementById("enfants");
    const div = document.createElement('div');
    div.setAttribute('id','marmot'+counter);
    let content = <div id="marmot3"><div class="card bg-light" style="max-width: 30rem;">
              <div class="card-header">
                <div class="row">
                <div class="col-10">
                  <h5>Enfant</h5>
                </div>
                <div class="col-1">
                    <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-x-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                    <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </div>
              </div>
              </div>
              <div class="card-body">
                <p>Informations : </p>
                <div class="row mb-2">
                  <div class="col">
                    <input class="form-control form-control-sm" type="text" placeholder="Nom">
                  </div>
                  <div class="col">
                    <input class="form-control form-control-sm" type="text" placeholder="Prénom">
                  </div>
                </div>
                <div class="row mb-2">
                  <div class="col">
                    <input class="form-control form-control-sm" type="text" placeholder="Lieu Naissance">
                  </div>
                  <div class="col">
                    <input id="dateNaissanceEnfant1" placeholder="Date Naissance" class="form-control form-control-sm" type="text" onfocus="(this.type='date')">
                  </div>
                </div>
                <div class="row mt-4 mb-2">
                  <div class="col">
                    <p>Lien de parenté:</p>
                  </div>
                  <div class="col">
                    <select class="form-control form-control-sm" id="">
                      <option value="" selected="" disabled="">Non renseigné</option>
                      <option>Enfant du couple</option>
                      <option>Enfant de votre conjointe uniquement</option>
                      <option>Votre enfant uniquement</option>
                    </select>
                  </div>
                </div>
                <div class="row mt-4 mb-2">
                  <div class="col-8">
                    <p>Dépent il/elle de votre foyer fiscal?</p>
                  </div>
                  <div class="col">
                      <input type="checkbox" data-size="sm" checked data-toggle="toggle" data-on="Oui" data-off="Non" data-onstyle="success" data-offstyle="danger">
                    </div>
                </div>
                <div class="row mb-2">
                  <div class="col">

                  </div>

                </div>

              </div>
            </div>
          </div>


    div.innerHTML = content;
    target.appendChild(div);
    counter++;

}

const buttonEnfant = document.getElementById('addEnfant');

buttonEnfant.addEventListener('click',function (){

    addChildren();

});
