import mongoose from "mongoose";
 const userSchema = new mongoose.Schema({
    userName:{
            type:String,
            require:[true,"user name required"]
    },
    email:{
        type:String,
        require:[true,"email required"]
    },
    password:{
        type: String,
        require:[true, "password required "]
    }
 })

 const userModel= mongoose.model("users_info", userSchema);
export default userModel;