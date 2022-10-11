import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../config';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const authProvider = new GoogleAuthProvider();

export const getAuthInstance = () => ({ auth, authProvider });
