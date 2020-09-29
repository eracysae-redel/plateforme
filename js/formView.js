
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

