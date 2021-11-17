import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyA1c_VeFc3U67KLVcXK5ILQn0UF83Q6XhU",
    authDomain: "team-voting-app-96c2a.firebaseapp.com",
    projectId: "team-voting-app-96c2a",
    storageBucket: "team-voting-app-96c2a.appspot.com",
    messagingSenderId: "422112739371",
    appId: "1:422112739371:web:0bef07e4ede5abab352a6e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();