import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLhbBNo0JvOBYGSBg-ntmuB_uMw5AdOyQ",
  authDomain: "filmelek-99d10.firebaseapp.com",
  projectId: "filmelek-99d10",
  storageBucket: "filmelek-99d10.appspot.com",
  messagingSenderId: "690461027924",
  appId: "1:690461027924:web:21c364c6bef6f8480607c1",
  measurementId: "G-92GB5NPSET"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password)=>{
    try{
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email, 
        })
    }catch(error){
        console.log(error);
    }
    
}

const login = async(email, password)=>{
    try {
        signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
    }
}


const logout = ()=>{
    signOut(auth);
}

export {auth, db, login, signup, logout};