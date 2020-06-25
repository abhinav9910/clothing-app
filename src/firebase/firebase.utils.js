import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyATCgKMMXPe5JsIIpWP7S2REPL8f625GDE',
	authDomain: 'crwn-db-98402.firebaseapp.com',
	databaseURL: 'https://crwn-db-98402.firebaseio.com',
	projectId: 'crwn-db-98402',
	storageBucket: 'crwn-db-98402.appspot.com',
	messagingSenderId: '475519808785',
	appId: '1:475519808785:web:b8977e4d8b51a6f039c8b0',
	measurementId: 'G-GLJLN85DXF',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
