import { useContext } from "react";
import { AuthContext } from "../auth.context";
import { getME, login, logout, register } from "../services/auth.api";



export const useAuth=()=>{
    const context= useContext(AuthContext)
    const {user,setUser,loading,setLoading}= context

    const handleLogin = async ({ email,password}) => {
        setLoading(true);
        const data= await login({email,password})
        setUser(data.user)
        setLoading(false)        
    }
    const handleRegistration = async ({ userName,email,password}) => {
        setLoading(true);
        const data= await register({userName,email,password})
        setUser(data.user)
        setLoading(false)        
    }
    
    const handleLogout = async () => {
        setLoading(true)
        const data= await logout()
        setUser(data.user)
        setLoading(false)
    }
      
 return { user ,loading ,handleRegistration,handleLogin, handleLogout }
}
