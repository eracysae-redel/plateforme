
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

let counter = 0;

function supprChildren(child){

    counter --;
    const parent = child.parentNode;
    parent.parentNode.removeChild(parent)

}

function addChildren(){

    counter++;
    const target = document.getElementById("enfants");
    const div = document.createElement('div');
    const divName = 'enfant' + counter;
    div.setAttribute('id', divName);
    let content =   <div> class="container" id="marmots">
        <div class="card bg-light" style="max-width: 30rem;">
          <div class="card-header">
            <div class="row">
            <div class="col-10">
              <h5>Enfant 1</h5>
            </div>
            <div class="col-1">
              <svg onclick="supprChildren(this)" width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-x-circle-fill" fill="red" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
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
                  <option value="" selected disabled>Non renseigné</option>
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

}

const buttonEnfant = document.getElementById('addEnfant');

buttonEnfant.addEventListener('click',function (){

    addChildren();

});
