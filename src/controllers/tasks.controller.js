import view from '../views/tasks.html'
import Task from '../firebase/task.firebase'

const tasks = new Task();

const getUid = () => {
    const user = firebase.auth().currentUser;
    if (user === null) {
        console.log(user)
    } else {
        console.log('www')
    }
    console.log(user)
}

console.log(getUid())

export default () => {
    const divElement = document.createElement('div');
    divElement.innerHTML = view;

    const taskInput = divElement.querySelector('#input-task');
    taskInput.addEventListener('keyup', (e) => {
        if (e.keyCode === 13){
            e.preventDefault();
            const task = taskInput.value;
            tasks.createTask(user.uid, task);
        }

    })

    return divElement;
}