import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyC0XrAE1pUZKREVg-RqeTdfaBukKHnXXns",
    authDomain: "portalchamado.firebaseapp.com",
    projectId: "portalchamado",
    storageBucket: "portalchamado.appspot.com",
    messagingSenderId: "89534526545",
    appId: "1:89534526545:web:00caa4c0ccdb8cda507470",
    measurementId: "G-ENEYEMQKF2"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const auth = getAuth(firebaseApp);
  const db = getFirestore(firebaseApp);
  const storage = getStorage(firebaseApp);

  export {auth, db, storage};