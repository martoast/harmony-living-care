import { getFirestore, collection } from "firebase/firestore";

export default defineNuxtPlugin((nuxtApp) => {
  const db = getFirestore(nuxtApp.$firebaseApp);
  const modelsRef = collection(db, "jobs");

  return {
    provide: {
      db,
      modelsRef,
    },
  };
});