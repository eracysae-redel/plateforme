const signInMailField = document.getElementById('email');
const signIn = document.getElementById('signIn');
const signInPasswordField = document.getElementById('password');

const authSignIn = firebase.auth();


const signInWithEmailFunction = () => {
    const email = signInMailField.value;
    const password = signInPasswordField.value;

    authSignIn.signInWithEmailAndPassword(email,password)
        .then(() => {
            verifyEmail();
        })
        .catch(error => {
            console.error(error);
        })
}



const verifyEmail = () => {
    if(authSignIn.currentUser.emailVerified) {
        window.location.assign('mainBT5ALPHA.html');
        alert(authSignIn.currentUser.emailVerified);
    } else {
        window.location.assign('emailVerification.html');
        alert(authSignIn.currentUser.emailVerified);
    }
}

signIn.addEventListener('click',signInWithEmailFunction);