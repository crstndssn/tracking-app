import view from '../views/money.html'

export default () => {

    const divElement = document.createElement('div');
    divElement.innerHTML = view;

    return divElement;
}