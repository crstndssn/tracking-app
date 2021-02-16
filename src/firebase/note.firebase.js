export default class Note {

    createNote() {
        return firebase.firestore()
            .collection('notes')
            .add({
                autor: uid,
                note: note,
                description: drescription,
                date: firebase.firestore.FieldValue.serverTimestamp()
            })
            .then(refDoc => {
                console.log(`Id task => ${refDoc.id}`)
            })
            .catch(error => {
                console.log(`Error Al crear nota ${error}`)
            })
    }

    getNotes(notesContainer, userid) {
        firebase.firestore()
            .collection('notes')
            .orderBy('date', 'asc')
            .where('autor', '==', userid)
            .onSnapshot(querySnapshot => {
                notesContainer.innerHTML = '';

                querySnapshot.forEach(task => {
                    const colorsCard = [
                        'bg-red-300',
                        'bg-yellow-300',
                        'bg-green-300',
                        'bg-blue-300',
                        'bg-indigo-300',
                        'bg-purple-300',
                        'bg-pink-300',

                    ]
                    let notesHtml = this.getNotesTemplate(
                        note.data().notes,
                        note.date
                    )
                })
            })
    }

    getNotesTemplate(color, title, date) {
        return `
            <div class="w-full p-8 ${color} rounded-lg cursor-pointer">
                <h1 class="text-4xl font-medium my-2">${title}</h1>
                <p class="text-xl text-gray-700">${date}</p>
            </div>
        `;
    }

}