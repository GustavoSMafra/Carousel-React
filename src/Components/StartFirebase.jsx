import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

function StartFirebase() {
    const firebaseConfig = {
        apiKey: "AIzaSyCohsRXQCn1KQqE_JwlQ0pU01s7gLg3mP8",
        authDomain: "company-products-b3aab.firebaseapp.com",
        databaseURL: "https://company-products-b3aab-default-rtdb.firebaseio.com",
        projectId: "company-products-b3aab",
        storageBucket: "company-products-b3aab.appspot.com",
        messagingSenderId: "899418575172",
        appId: "1:899418575172:web:e5d03bee6e543b26c14711",
        measurementId: "G-FW8VPKY3WP"
    };
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    return getDatabase(app);
}

export default StartFirebase;