export default class Task {

    createTask(uid, task) {
        return firebase.firestore()
            .collection('tasks')
            .add({
                autor: uid,
                task: task,
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
                })
            })  
    }

    getTasksTemplate(task, id) {
        return `
             <div class="shadow-md flex justify-between items-center rounded p-4 my-2">
             <p class="text-md font-medium">${task}</p>
                 <div class="flex">
                     <p class="bg-green-500 py-2 px-3 mx-1 text-white rounded-full text-sm cursor-pointer">done</p>
                     <p data-id="${id}" class="delete-task bg-red-500 py-2 px-3 text-white rounded-full text-sm cursor-pointer">delete</p>
                 </div>
             </div>
             `;
    }


    deleteTask(id){
        firebase.firestore()
            .collection('tasks')
            .doc(id).delete()
    }
    

}