
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

    switch (e.target.value) {
        case "Mariage" :
            mariage.removeAttribute("hidden");
            pacs.setAttribute("hidden",true);
            divorce.setAttribute('hidden',true);
            break;

        case "Pacs" :
            pacs.removeAttribute("hidden");
            mariage.setAttribute("hidden",true);
            divorce.setAttribute('hidden',true);
            break;

        case "Divorcé" :
            divorce.removeAttribute("hidden");
            pacs.setAttribute("hidden",true);
            mariage.setAttribute('hidden',true);
            break;

        default :
            mariage.setAttribute("hidden",true);
            pacs.setAttribute("hidden",true);
            divorce.setAttribute('hidden',true);
            break;
    }
});
