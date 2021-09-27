import { getFirestore, collection, addDoc } from "firebase/firestore/lite";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../secrets.json";

export async function createProblem(title: string, description : string) {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
  
    await addDoc(collection(db, "problems"), {
      title: title,
      description: description
    });
  }