// Import Firebase modules for Firebase v9+
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyD8e8TmgwtOWHwjIpg-1Jn9aZ7YcJTDbr8",
  authDomain: "clinic-management-f74c8.firebaseapp.com",
  projectId: "clinic-management-f74c8",
  storageBucket: "clinic-management-f74c8.appspot.com",
  messagingSenderId: "115730435805",
  appId: "1:115730435805:web:dd1d92a5364f1b866fd534"
};

// Initialize Firebase for v9+
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
