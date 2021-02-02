export default class Authentication {
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

    authEmailPassword(email, password) {
        firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(result => {
                console.log('loged')
            })
            .catch(error => {
                console.log(error)
            })
    }

}