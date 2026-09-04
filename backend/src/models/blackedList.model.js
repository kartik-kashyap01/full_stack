import mongoose from "mongoose";

const blackList = new mongoose.Schema({
        token:{
            type:String,
            require:[true,"enter token "]
        }
},{
    timestamps: true
})

 const blackListedToken= mongoose.model("blackListedToken", blackList);
export default blackListedToken;