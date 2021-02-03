import view from '../views/login.html'
import Authentication from '../firebase/auth.firebase'

const auth = new Authentication();

export default () => {
    const divElement = document.createElement('div');
    divElement.innerHTML = view;

    const loginForm = divElement.querySelector('#form-login')
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = loginForm['login-email'].value;
        const password = loginForm['login-password'].value;
        auth.authEmailPassword(email, password);
        location.reload();
        window.location.href = '#/tasks';
    });

    const loginGoogle = divElement.querySelector('#login-google')
    loginGoogle.addEventListener('click', (e) => {
        e.preventDefault();
        auth.authGoogle();
        console.log('loged google')
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                window.location.href = '#/tasks'
            } else {
                console.log('hubo un problema en el logeo')
            }
        })
    })

    return divElement;

}