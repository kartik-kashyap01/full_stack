import { useContext ,useEffect } from "react";
import { AuthContext } from "../auth.context";
import { getME, login, logout, register } from "../services/auth.api";



export const useAuth=()=>{
    const context= useContext(AuthContext)
    const {user,setUser,loading,setLoading , home ,setHome}= context

    const handleLogin = async ({ email,password}) => {
        setLoading(true);

        try {
            const data= await login({email,password})
        setUser(data.user)
         return true
        } catch (error) {

            console.log("Login failed:", error);

        return false;
              
        }finally{
            
             setLoading(false)
        }
        
             
    }
    const handleRegistration = async ({ userName,email,password}) => {
        setLoading(true);
        try {
             const data= await register({userName,email,password})
        setUser(data.user)
          return true
        } catch (error) {
             console.log("Login failed:", error);
             return false
        }finally{setLoading(false)        

        }
       
        
    }
    
    const handleLogout = async () => {
        setLoading(true)
        try {
            const data= await logout()
        setUser(data.user)
        } catch (error) {
            
        }finally{
            setLoading(false)
        }
        
        
    }
       useEffect(() => {
           const getAndSetUser = async () => {
    try {
        const data = await getME()

        if (data?.user) {
            setUser(data.user)
        } else {
            setUser(null)
        }
    } catch (err) {
        console.log(err)
        setUser(null)
    } finally {
        setLoading(false)
    }
}
          
            getAndSetUser()
          }, [])
 return { user ,loading ,handleRegistration,handleLogin, handleLogout ,home, setHome }
}
