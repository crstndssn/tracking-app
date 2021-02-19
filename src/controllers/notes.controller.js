import menuNoteView from '../views/notes/menu.note.html'
import addNoteView from '../views/notes/add.note.html'
import allNoteView from '../views/notes/all.note.html'

export default () => {

    const divElement = document.createElement('div');
    divElement.innerHTML = menuNoteView;


    const containerNote = divElement.querySelector('.container-note')
    const navigationAll = divElement.querySelector('.navigation-2')
    const navigationNote = divElement.querySelector('.navigation-1')

    navigationNote.style.display = 'none';

    containerNote.innerHTML = allNoteView;


    // CONFIG TO NAVIGATION

    // All Notes
    const allNoteBtn = divElement.querySelector('#all-note');
    allNoteBtn.addEventListener('click', (e) => {
        containerNote.innerHTML = '';
        containerNote.innerHTML = allNoteView;
        navigationNote.style.display = 'none';
        navigationAll.style.display = 'flex';
    });

    // Add Note
    const addNoteBtn = divElement.querySelector('#add-note');
    addNoteBtn.addEventListener('click', (e) => {
        containerNote.innerHTML = '';
        containerNote.innerHTML = addNoteView;
        navigationAll.style.display = 'none';
        navigationNote.style.display = 'flex';
    })

    // Create note to firebase
    const formNote = divElement.querySelector('#form-note');
    console.log(divElement)



    return divElement;
}