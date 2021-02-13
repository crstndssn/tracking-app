import view from '../views/money.html'
import Modal from '../firebase/modal.firebase';

const modal = new Modal();

export default () => {

    const divElement = document.createElement('div');
    divElement.innerHTML = view;

    // modal notificación
    const modalContainer = divElement.querySelector('.modal-container')

    const expenseInput = divElement.querySelector('#input-expense');


    expenseInput.addEventListener('keyup', function(e) {

            
        
            // var formatted = (this.value * 1).toLocaleString('es-US', { style: 'currency', currency: 'USD' }).format(expenseInput.value);
            // console.log(formatted)
            // expenseInput.value = formatted

            let numberFormat = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(expenseInput.value)
            expenseInput.value = numberFormat
            console.log();

        if (e.keyCode === 13) {
            e.preventDefault();
            

            
            const expense = expenseInput.value;


            console.log(expense )
            // if (expense == '') {
            //     modal.errorModal('Enter a valid value', modalContainer)
            // } else {
                
            // }
        }
    }, false)

    return divElement;
}