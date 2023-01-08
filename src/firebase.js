// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCYWRDe5zFfH8CTsfkhrTsMrI2sSwBVBkU',
  authDomain: 'refubook-f19c6.firebaseapp.com',
  projectId: 'refubook-f19c6',
  storageBucket: 'refubook-f19c6.appspot.com',
  messagingSenderId: '792141445365',
  appId: '1:792141445365:web:0b21c6ced4717308322dbc',
  measurementId: 'G-QH1V3W33F0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth();
