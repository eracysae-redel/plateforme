const mailField = document.getElementById('email');
const submit = document.getElementById('submit');
const passwordField = document.getElementById('password');

const auth = firebase.auth();

auth.useDeviceLanguage();



const signUpFunction = () => {
    const email = mailField.value;
    const password = passwordField.value;

    auth.createUserWithEmailAndPassword(email,password)
    .then(() => {
        sendVerificationEmail();
    })
        .catch(error => {
        console.error(error)
    })
}

const sendVerificationEmail = () => {
    auth.currentUser.sendEmailVerification()
        .then(() => {
            window.location.assign('../mainBT5ALPHA.html')
        })
        .catch(error => {
            console.error(error);
        })
}



submit.addEventListener('click' , signUpFunction);