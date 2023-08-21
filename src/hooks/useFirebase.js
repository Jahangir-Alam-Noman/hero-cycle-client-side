import { getAuth,GoogleAuthProvider,signOut,onAuthStateChanged,signInWithPopup} from "firebase/auth";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import { useEffect, useState } from "react";

// initialize firebase Application
initializeFirebase();

const useFirebase = () =>{
    const [user,setUser] = useState({});
    const [isLoading,setIsLoading] = useState(true);
    const [authError , setAuthError] = useState(' ');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () =>{
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
        .then((result) => {
           const user = result.user;
           setUser(user);

        }).catch((error) => {
          setAuthError(error.message);
        
        })
        .finally(()=> setIsLoading(false));
    }

    //  observe the user state
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
               setUser(user);
            } else {
              setUser({});
            }
            setIsLoading(false);
          });
          return ()=> unsubscribe;
    },[])

    const logOut = ()=>{
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(()=>setIsLoading(false));
    }
    return {
        user,
        isLoading,
        logOut,
        authError,
        signInWithGoogle

    }
}
export default useFirebase;
