const forbidden = () => {
    auth.onAuthStateChanged(function(user) {
        if (user && auth.currentUser.emailVerified) {
            console.log('User ' + user.email + ' connected !');
        } else {
            console.error('No user is signed in.');
            window.location.assign('403.html');
        }
    });
}

window.onload = () => {
    forbidden();
}


