import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBCe9zgIPB5D6DBRyIBZ8Ydr06mF7jrBdE',
  authDomain: 'gasb-420d3.firebaseapp.com',
  projectId: 'gasb-420d3',
  storageBucket: 'gasb-420d3.appspot.com',
  messagingSenderId: '944798575430',
  appId: '1:944798575430:web:d7816bd7d8919a28609347',
  measurementId: 'G-XNRXKQXT8R',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const database = getFirestore(app);
