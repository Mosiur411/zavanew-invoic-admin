/* import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../firebase/Firebase.config";


const [signOut, loading, error] = useSignOut(auth);



export const FirebaseLogout = async () => {
    const result = await signOut()
    if (result) {
        toast.success("Logout")
        navigate("/")
    }
} */