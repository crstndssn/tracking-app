export default class Authentication {
    
    // Sign Up
    signUpEmailAndPassword(name, email, password) {
        firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then((result) => {
                console.log(loged)
            })
            .catch (error => {
                console.log(error)
            })
    }

    // Sign Up Google
    signUpGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase
            .auth()
            .signInWithPopup(provider)
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                consoler.log(error)
            })
    }


    // Login
    authEmailPassword(email, password) {
        firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then(result => {
                console.log('loged')
            })
            .catch(error => {
                console.log(error)
            })
    }

    // Login Google
    authGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            })
    }

}