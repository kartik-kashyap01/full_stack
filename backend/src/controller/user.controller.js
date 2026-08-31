import userModel from "../models/register.user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../database/config.js";
async function user(req, res) {
            const { user, email, password} = req.body;   
            if( !user || !email || !password){
                res.status(401).json({
                    message:"pls enter credentials"
                })
            }

            const isallready = await userModel.findOne({
                $or:[{user},{email}]
            })

            if(isallready){
                res.status(401).json({
                    message:"user already exixts"
                })
            }
            const hash = await bcrypt.hash(password, 10)

            const userid = await userModel.create({
                username,
                email,
                password :hash 
            })
            const token = jwt.sign(
                {id : userid._id, username: userid.username},
                config.JWT_SECRET,{expiresIn:"1d"}
            )

            res.cookie("token",token)



            return res.status(201).json({
                message:"user created succefully",
                userid
            })


            
}