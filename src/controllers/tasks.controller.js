import view from '../views/tasks.html'
import Task from '../firebase/task.firebase'

const tasks = new Task();


export default () => {
    const divElement = document.createElement('div');
    divElement.innerHTML = view;

    const taskInput = divElement.querySelector('#input-task');
    taskInput.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
            e.preventDefault();
            const task = taskInput.value;
            taskInput.value = ''
            firebase.auth().onAuthStateChanged((user) => {
                if(user){
                    tasks.createTask(user.uid, task);
                } else {
                    console.log('error')
                }
                
            })
        }
    })


    // get tasks
    const tasksContainer = divElement.querySelector('#tasks-container');

    firebase.auth().onAuthStateChanged((user) => {
        if(user){
            console.log(user.uid)
           tasks.getTasks(tasksContainer, user.uid)
           
        } else {
            console.log('error')
        }
    })


    
    




    return divElement;
}