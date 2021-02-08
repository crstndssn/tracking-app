import view from '../views/goals.html'

export default () => {
    const divElement = document.createElement('div');
    divElement.innerHTML = view;

    return divElement;
}