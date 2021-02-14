import view from '../views/money.html'
import Modal from '../firebase/modal.firebase';
import Money from '../firebase/money.firebase'

const modal = new Modal();
const money = new Money();

export default () => {

    const divElement = document.createElement('div');
    divElement.innerHTML = view;

    // modal notificación
    const modalContainer = divElement.querySelector('.modal-container')

    // input expense
    const expenseInput = divElement.querySelector('#input-expense');

    expenseInput.addEventListener('keyup', function(e) {
        if (e.keyCode === 13) {
            e.preventDefault();
            expenseInput.value = '';
            const expense = expenseInput.value;
            if (expense == '') {
                modal.errorModal('Enter a valid value', modalContainer)
            } else {
                firebase.auth().onAuthStateChanged((user) => {
                    money.createExpense(user.uid, expense)
                })
                modal.successModal('Expense created', modalContainer)
            }
        }
    }, false)


    // get expenses
    const expensesContainer = divElement.querySelector('#expense-container')

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            console.log(expensesContainer)
            money.getExpenses(expensesContainer, user.uid);
        } else {
            modal.errorModal('No cargan tus gastos :(')
        }
    })

    

    return divElement;
}