import { useContext } from "react";
import { AuthContext } from "../auth.context";
import { getME, login, logout, register } from "../services/auth.api";



export const useAuth=()=>{
    const context= useContext(AuthContext)
    const {user,setUser,loading,setLoading}= context

    

      

}
