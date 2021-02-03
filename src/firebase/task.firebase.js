export default class Task {

    createTask(uid, task) {
        return firebase.firestore()
            .collection('tasks')
            .add({
                uid: uid,
                task: task,
                date: firebase.firestore.FieldValue.serverTimestamp()
            })
            .then(refDoc => {
                console.log(`Id task => ${refDoc.id}`);
            })
            .catch(error => {
                console.log(`Error creando posts ${error.message}`);
            })
    }

    getTasks() {
        firebase.firestore()
            .collection('tasks')
            .onSnapshot(querySnapshot => {
                console.log(querySnapshot)
            })
    }

}