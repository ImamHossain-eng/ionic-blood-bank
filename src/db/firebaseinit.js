import { initializeApp } from "firebase/app";
// import { getDatabase } from 'firebase/database'
import firebaseconfig from './firebaseconfig.js'
import { getFirestore } from 'firebase/firestore';

const firebaseApp = initializeApp(firebaseconfig)
// const db = getDatabase(firebaseApp)
const db = getFirestore(firebaseApp)

export default db;