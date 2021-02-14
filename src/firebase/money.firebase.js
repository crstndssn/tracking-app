import Modal from '../firebase/modal.firebase'

const modal = new Modal();

export default class Money {

    createExpense(uid, expense) {
        return firebase.firestore()
            .collection('expenses')
            .add({
                autor: uid,
                expense: expense,
                date: firebase.firestore.FieldValue.serverTimestamp()
            })
            .then(refDoc => {
                console.log(`Id spense ${refDoc.id}`);
            })
            .catch(error => {
                console.log('eeeeeeee')
                console.log(`Error creando spense ${error}`)
            })
    }


    getExpenses(expensesContainer, userid) {
        firebase.firestore()
            .collection('expenses')
            .orderBy('date', 'asc')
            .where('autor', '==', userid)
            .onSnapshot(querySnapshot => {
                console.log(expensesContainer)
                expensesContainer.innerHTML = '';
                querySnapshot.forEach(expense => {
                    let expenseContainer = this.getExpenseTemplate(
                        expense.data().expense,
                        expense.id
                    )
                    expensesContainer.innerHTML += expenseContainer;
                    const btnsDelete = expensesContainer.querySelectorAll(".delete-expense")
                    btnsDelete.forEach(btn => {
                        btn.addEventListener('click', (e) => {
                            this.deleteExpense(btn.dataset.id)
                        })
                    })
                })
            })
    }

    getExpenseTemplate(expense, id) {
        return `
        <div class="border border-gray-100 flex justify-between items-center rounded-2xl px-5 py-3 my-2 shadow">
            <div class="flex justify-center items-center">
                 <p class="text-md text-gray-800 font-base">$${expense}</p>
            </div>
            <div class="flex">
                <p data-id="${id}" class="delete-expense bg-red-500 py-1 px-2 text-white rounded-full text-sm cursor-pointer">delete</p>
            </div>
        </div>
        `;
    }

    deleteExpense(id) {
        firebase.firestore()
            .collection('expenses')
            .doc(id).delete()
    }

}