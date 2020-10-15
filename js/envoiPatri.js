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



