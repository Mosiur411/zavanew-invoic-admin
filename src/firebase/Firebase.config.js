import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const app = initializeApp({
    apiKey: "AIzaSyDifDM4Er5f4Ec9jdY0lFSKQuL-DP1wUto",
    authDomain: "zava-new.firebaseapp.com",
    projectId: "zava-new",
    storageBucket: "zava-new.appspot.com",
    messagingSenderId: "822482089173",
    appId: "1:822482089173:web:91aedd90f47bc7d8f95e5c",
    measurementId: "G-WY51TGPLVM"
});
getAnalytics(app);
export const auth = getAuth(app);
export default app;

