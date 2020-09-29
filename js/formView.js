
const situation = document.getElementById("situationMatri");

situation.addEventListener("change",function (e){

    switch (e.target.value) {
        case 'Mariage' :
            document.getElementById('dateMariage').removeAttribute("hidden");
            document.getElementById('depuis').removeAttribute("hidden");
            document.getElementById('datePacs').setAttribute("hidden",true);
            document.getElementById('dateDivorce').setAttribute("hidden",true);
            break;

        case 'Pacs' :
            document.getElementById('datePacs').removeAttribute("hidden");
            document.getElementById('depuis').removeAttribute("hidden");
            document.getElementById('dateMariage').setAttribute("hidden",true);
            document.getElementById('dateDivorce').setAttribute("hidden",true);
            break;

        case 'Divorcé' :
            document.getElementById('dateDivorce').removeAttribute("hidden");
            document.getElementById('depuis').removeAttribute("hidden");
            document.getElementById('dateMariage').setAttribute("hidden",true);
            document.getElementById('datePacs').setAttribute("hidden",true);
            break;

        default :
            document.getElementById('dateMariage').setAttribute("hidden",true);
            document.getElementById('datePacs').setAttribute("hidden",true);
            document.getElementById('dateDivorce').setAttribute("hidden",true);
            document.getElementById('depuis').setAttribute("hidden",true);
            break;

    }
});

