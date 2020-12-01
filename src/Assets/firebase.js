import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDsn6i88He3sp8fVy_4UfQ4LATFkd66ZbA",
    authDomain: "instant-messaging-app-ia.firebaseapp.com",
    databaseURL: "https://instant-messaging-app-ia.firebaseio.com",
    projectId: "instant-messaging-app-ia",
    storageBucket: "instant-messaging-app-ia.appspot.com",
    messagingSenderId: "515960670259",
    appId: "1:515960670259:web:411a265e127059ff6e7b46",
    measurementId: "G-Q6CZ2C8GF7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const serverTime = firebase.firestore.FieldValue.serverTimestamp();

//Store Auth Token
export const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function (idToken) {
            localStorage.setItem('token', idToken);
            // ...
        }).catch(function (error) {
            // Handle error
        });
}

export { auth, provider, serverTime };
export default db;