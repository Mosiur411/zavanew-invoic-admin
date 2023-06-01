import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const app = initializeApp({
    apiKey:"AIzaSyC6pS_g5q4nHfqdvKdtF3hxRCagxpGD-_c",
    authDomain:"zavawholesale-39741.firebaseapp.com",
    projectId:"zavawholesale-39741",
    storageBucket:"zavawholesale-39741.appspot.com",
    messagingSenderId:"601786849165",
    appId:"1:601786849165:web:8606e29ecb43f89b0a4fc4",
    measurementId:"G-2FE5GJM6M3"
});
getAnalytics(app);
export const auth = getAuth(app);
export default app;





