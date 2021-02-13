export default class Money {
    
    createExpense(uid, expenseName, expenseValue) {
        return firebase.firestore()
            .collection('expenses')
            .add({
                autor: uid,
                expenseName: expenseName,
                expenseValue: expenseValue,
                date: firebase.firestore.FieldValue.serverTimestamp()
            })
            .then(refDoc => {
                console.log(`Id spense ${refDoc.id}`);
            })
            .catch(error => {
                console.log(`Error creando spense ${error}`)
            })
    }


}