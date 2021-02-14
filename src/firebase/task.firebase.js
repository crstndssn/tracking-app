export default class Task {

    createTask(uid, task, state) {
        return firebase.firestore()
            .collection('tasks')
            .add({
                autor: uid,
                task: task,
                state: state,
                date: firebase.firestore.FieldValue.serverTimestamp()
            })
            .then(refDoc => {
                console.log(`Id task => ${refDoc.id}`);
            })
            .catch(error => {
                console.log(`Error creando po sts ${error.message}`);
            })
    }

    getTasks(tasksContainer, userid) {
         firebase.firestore()
            .collection('tasks')
            .orderBy('date', 'asc')
            .where('autor', '==', userid)
            .where('state', '==', true)
            .onSnapshot(querySnapshot => {
                tasksContainer.innerHTML = '';
                querySnapshot.forEach(task => {
                    let taksHtml = this.getTasksTemplate(
                        task.data().task,
                        task.id
                    )
                    tasksContainer.innerHTML += taksHtml  
                    const btnsDelete = tasksContainer.querySelectorAll('.delete-task');
                    btnsDelete.forEach(btn => {
                        btn.addEventListener('click', (e)=> {
                            console.log(btn.dataset.id)
                            this.deleteTask(btn.dataset.id)
                        })   
                    })
                    const btnsDone = tasksContainer.querySelectorAll('.done-task');
                    btnsDone.forEach(btn => {
                        btn.addEventListener('click', (e) => {
                            this.doneTask(btn.dataset.id)
                            console.log(btn.dataset.id)
                        })
                    })
                })
            })  
    }


    getTasksDone(tasksContainerDone, userid) {
        firebase.firestore()
            .collection('tasks')
            .orderBy('date', 'asc')
            .where('autor', '==', userid)
            .where('state', '==', false)
            .onSnapshot(querySnapshot => {
                tasksContainerDone.innerHTML = '';
                querySnapshot.forEach(task => {
                    let taksDoneHtml = this.getTasksDoneTemplate(
                        task.data().task,
                        task.id
                    )
                    tasksContainerDone.innerHTML += taksDoneHtml  
                    const btnsDelete = tasksContainerDone.querySelectorAll('.delete-task');
                    btnsDelete.forEach(btn => {
                        btn.addEventListener('click', (e)=> {
                            console.log(btn.dataset.id)
                            this.deleteTask(btn.dataset.id)
                        })   
                    })
                    const btnsDone = tasksContainerDone.querySelectorAll('.undone-task');
                    btnsDone.forEach(btn => {
                        btn.addEventListener('click', (e) => {
                            this.undoneTask(btn.dataset.id)
                            console.log(btn.dataset.id)
                        })
                    })
                })
            })
    }

    getTasksTemplate(task, id) {
        return `
             <div class="border border-gray-100 flex justify-between items-center rounded-2xl px-5 py-3 my-2 shadow">
                <div class="flex justify-center items-center">
                    <p class="text-md text-gray-800 font-base">${task}</p>
                </div>
                 <div class="flex">
                    <p data-id="${id}" class="done-task bg-green-500 py-1 px-2 mx-1 text-white rounded-full text-sm cursor-pointer">done</p>
                    <p data-id="${id}" class="delete-task bg-red-500 py-1 px-2 text-white rounded-full text-sm cursor-pointer">delete</p>
                 </div>
             </div>
             `;
    }

    getTasksDoneTemplate(task, id) {
        return `
            <div class="border flex justify-between items-center rounded-lg px-5 py-3 my-2">
            <p class="text-md text-gray-500 font-base line-through">${task}</p>
                <div class="flex">
                <p data-id="${id}" class="undone-task bg-gray-300 py-1 px-2 mx-1 text-white rounded-full text-sm cursor-pointer">undone</p>
                <p data-id="${id}" class="delete-task bg-gray-400 py-1 px-2 text-white rounded-full text-sm cursor-pointer">delete</p>
                </div>
            </div>
        `;
    }

    doneTask(id) {
        firebase.firestore()
            .collection('tasks')
            .doc(id).update({
                state: false
            })
    }

    undoneTask(id){
        firebase.firestore()
            .collection('tasks')
            .doc(id).update({
                state: true
            })
    }

    deleteTask(id){
        firebase.firestore()
            .collection('tasks')
            .doc(id).delete()
    }
    

}