
const mariage = document.getElementById("situationMatri");

mariage.addEventListener("change",function (e){

    if (e.target.value === "Mariage") {

        document.getElementById('dateMariage').removeAttribute("hidden");
    } else {
        document.getElementById('dateMariage').setAttribute("hidden",true);
    }
});