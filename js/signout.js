const logOut = document.getElementById('signOut');

const auth = firebase.auth();

const signOutFunction = () => {
    auth.signOut()
        .then(() => {
            window.location.assign('../public/index.html');
        })
        .catch(error => {
            console.error(error);
        })
}

logOut.addEventListener('click',signOutFunction);