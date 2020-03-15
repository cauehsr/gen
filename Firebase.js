import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const settings = { timestampsInSnapshots: true };

const config = {
    apiKey: "AIzaSyCEhlNk_vB5lfx06ACRgHZHDoZfbLdHxG8",
    authDomain: "genshop-63be0.firebaseapp.com",
    databaseURL: "https://genshop-63be0.firebaseio.com",
    projectId: "genshop-63be0",
    storageBucket: "genshop-63be0.appspot.com",
    messagingSenderId: "985883029134",
    appId: "1:985883029134:web:a85887376b779c32a5e3df"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;