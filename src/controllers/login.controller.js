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
        console.log(email, password)
        auth.authEmailPassword(email, password);
    });

    return divElement;

}