import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDLnSwMUrHqwJk5W9NEqLMl9Ax1cca0WZc",
  authDomain: "loggin-d850a.firebaseapp.com",
  projectId: "loggin-d850a",
  storageBucket: "loggin-d850a.appspot.com",
  messagingSenderId: "725243648654",
  appId: "1:725243648654:web:4e69b0205ef01574c607df"
};

const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export default app;