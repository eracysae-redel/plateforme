const auth = firebase.auth();

const signOutFunction = () => {
    auth.signOut()
        .then(() => {
            window.history.back();
        })
        .catch(error => {
            console.error(error);
        })
}