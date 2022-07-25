import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: 'AIzaSyBWhXJTnDf3VoH8HVjqv1HFYK1H_96a8d0',
  authDomain: 'crown-db-755a2.firebaseapp.com',
  projectId: 'crown-db-755a2',
  storageBucket: 'crown-db-755a2.appspot.com',
  messagingSenderId: '162344884939',
  appId: '1:162344884939:web:cfb885d4e50fb7c111594e',
  measurementId: 'G-K1JBTKCP6B',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
