import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDwP5qUOltbUi1emaepSupcaBNMT85AQqk",
  authDomain: "mlc-horizon-fund.firebaseapp.com",
  projectId: "mlc-horizon-fund",
  storageBucket: "mlc-horizon-fund.firebasestorage.app",
  messagingSenderId: "1097163442655",
  appId: "1:1097163442655:web:655a02e2b62d88bfb95c6a"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);