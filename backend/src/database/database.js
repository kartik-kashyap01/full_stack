import mongoose from "mongoose";


async function connectDB() {
   await mongoose.connect("mongodb+srv://admin_1:Ws9vBfxtBGU4S9FI@project-1.xz3qclw.mongodb.net/full_stack") 
    console.log("connected  to db✅")  
}
export default connectDB;