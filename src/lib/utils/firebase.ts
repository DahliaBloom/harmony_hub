import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBHVQSKe0iryHvTUQaM9anJ4JDIBxFs4Bk",
    authDomain: "harmony-hub-90940.firebaseapp.com",
    projectId: "harmony-hub-90940",
    storageBucket: "harmony-hub-90940.appspot.com",
    messagingSenderId: "753913125555",
    appId: "1:753913125555:web:10fafd30cc0eac4d2eaec6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};
