import view from '../views/signup.html'

export default () => {
    const divElement = document.createElement('div');
    divElement.innerHTML = view;
    return divElement;
}