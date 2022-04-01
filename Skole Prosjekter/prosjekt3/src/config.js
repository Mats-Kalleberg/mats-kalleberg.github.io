import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js';

// Initializing Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAtItwqsWjmI_NRH9oZG5ga0deWQh01610",
    authDomain: "prosjekt3-vg2.firebaseapp.com",
    projectId: "prosjekt3-vg2",
    storageBucket: "prosjekt3-vg2.appspot.com",
    messagingSenderId: "1076562091499",
    appId: "1:1076562091499:web:927a5001f912adbf960dae",
    measurementId: "G-PNZHGY2T9X"
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)