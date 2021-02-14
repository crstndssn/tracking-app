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
                if (user) {
                    const state = true;
                    tasks.createTask(user.uid, task, state);
                } else {
                    console.log('error')
                }
            })
        }
    })


    // get tasks
    const tasksContainer = divElement.querySelector('#tasks-container');

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            console.log(user.uid)
            tasks.getTasks(tasksContainer, user.uid)

        } else {
            console.log('error')
        }
    })

    // get all tasks
    const btnAllTasks = divElement.querySelector('#showCompletedTasks')
    let tasksContainerDone = divElement.querySelector('#task-done-container')

    let displayState = tasksContainerDone.style.display;

    btnAllTasks.addEventListener('click', (e) => {
        
        console.log(displayState)
        if(displayState == 'flex') {
            btnAllTasks.innerHTML = 'Hide Completed Tasks'
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    tasks.getTasksDone(tasksContainerDone, user.uid)
                } else {
                    console.log('error')
                }
            })  
            displayState = 'none';
        } else {
            btnAllTasks.innerHTML = 'Show Completed Tasks'
            tasksContainerDone.innerHTML = ''
            displayState = 'flex';
        }
    })


    return divElement;
}