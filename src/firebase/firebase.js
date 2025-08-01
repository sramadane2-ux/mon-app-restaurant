// src/firebase/firebase.js

// Importez les fonctions nécessaires depuis le SDK Firebase
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Votre configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBNNevHTEIJb0BZ5nriq0-9L3T_IorqMlA",
  authDomain: "restaurent-app-c0a18.firebaseapp.com",
  projectId: "restaurent-app-c0a18",
  storageBucket: "restaurent-app-c0a18.firebasestorage.app",
  messagingSenderId: "888574048124",
  appId: "1:888574048124:web:c8c119d1a5d2e5ea7056f9"
};

// Initialisez Firebase
const app = initializeApp(firebaseConfig);

// Exportez les services que nous allons utiliser
export const auth = getAuth(app);
export const db = getFirestore(app);

