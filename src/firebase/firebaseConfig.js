import { initializeApp } from 'firebase/app';

// Firebase Project Config.
const firebaseConfig = {
  apiKey: 'AIzaSyC4G60_txjH8eXltnRwdts-hktyLVXWiHY',
  authDomain: 'app-to-collect-pokemons.firebaseapp.com',
  projectId: 'app-to-collect-pokemons',
  storageBucket: 'app-to-collect-pokemons.appspot.com',
  messagingSenderId: '721808157577',
  appId: '1:721808157577:web:b90cc73f1bfc16e83b0f58',
};

// Initialize Firebase.
const firebaseApp = initializeApp(firebaseConfig);

export { firebaseApp };
