import { getFirestore, collection, addDoc } from "firebase/firestore/lite";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../secrets.json";

export async function createSolution(title: string, description : string) {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
  
    await addDoc(collection(db, "solutions"), {
      title: title,
      description: description,
      upvotes: 0
    });
  }
