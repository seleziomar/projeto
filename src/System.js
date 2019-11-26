import firebase from './config';

class System {

    logout(){
        firebase.auth().signOut();
    }

    addAuthListener(callback){
        firebase.auth().onAuthStateChanged(callback);
    }

    login(email,password){
        return firebase.auth().signInWithEmailAndPassword(email,password);
    }
}

export default new System();