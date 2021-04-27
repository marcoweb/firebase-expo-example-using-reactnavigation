import Firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAoUaJzyu1uPwHiNjgPF6phSkMWRdfu7ME",
    authDomain: "lista-de-linguagens-ed0a7.firebaseapp.com",
    projectId: "lista-de-linguagens-ed0a7",
    storageBucket: "lista-de-linguagens-ed0a7.appspot.com",
    messagingSenderId: "100332964602",
    appId: "1:100332964602:web:33258fd409a4ebea881743"
};
// Initialize Firebase
let app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();
