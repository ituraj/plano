import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyAaJjv9kYHN46hd-LpaOZeXXUiKrd0Xq68",
    authDomain: "plano-plano.firebaseapp.com",
    databaseURL: "https://plano-plano.firebaseio.com",
    projectId: "plano-plano",
    storageBucket: "",
    messagingSenderId: "702516577265",
    appId: "1:702516577265:web:f4bb08eb39c656cb"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;