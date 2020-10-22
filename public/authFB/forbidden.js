let user = firebase.auth().currentUser;
document.addEventListener('DOMContentLoaded', function() {
    if(!user) {
        console.error('403 forbidden');
        window.location.assign('403.html');
    }
});