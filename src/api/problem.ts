import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore/lite";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../secrets.json";
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function createProblem(title: string, description : string) {
    await addDoc(collection(db, "problems"), {
      title: title,
      description: description,
      upvotes: 0,
    });
}

export async function listProblems() {
  const querySnapshot = await getDocs(collection(db, "problems"));
  const docs = [];
  for (const doc of querySnapshot.docs) {
    docs.push({
      id: doc.id,
      data: doc.data(),
    })
  }
  return docs;
}
