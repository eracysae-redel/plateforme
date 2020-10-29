const mailField = document.getElementById('email');
const submit = document.getElementById('submit');
const passwordField = document.getElementById('password');

const auth = firebase.auth();

auth.useDeviceLanguage();

let actionCodeSettings = {
    url: 'https://plateforme-96b58.web.app/',
    handleCodeInApp: true,
};


const signUpFunction = () => {
    const email = mailField.value;
    const password = passwordField.value;

    auth.createUserWithEmailAndPassword(email,password)
    .then(() => {
        sendVerificationEmail();
    })
        .catch(error => {
        console.error(error);
    })
}

const sendVerificationEmail = () => {
    auth.currentUser.sendEmailVerification(actionCodeSettings)
        .then(() => {
            window.location.assign('emailVerification.html');
        })
        .catch(error => {
            console.error(error);
        })
}



submit.addEventListener('click' , signUpFunction);