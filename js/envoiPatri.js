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
