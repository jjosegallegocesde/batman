// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBF1QG-RbycW2sl6tl6kd8TSNhPT6j1ndE",
  authDomain: "tiendamiercoles-eb9e7.firebaseapp.com",
  projectId: "tiendamiercoles-eb9e7",
  storageBucket: "tiendamiercoles-eb9e7.appspot.com",
  messagingSenderId: "834807276227",
  appId: "1:834807276227:web:09869de034a84349f43876",
  measurementId: "G-1QZGTTLM6R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);