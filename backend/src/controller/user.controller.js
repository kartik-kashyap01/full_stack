import userModel from "../models/register.user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../database/config.js";
import blackListedToken from "../models/blackedList.model.js";

export async function registerUserController(req, res) {
            const { userName, email, password} = req.body;   
            if( !userName || !email || !password){
                res.status(401).json({
                    message:"pls enter credentials"
                })
            }

            const isallready = await userModel.findOne({
                $or:[{userName},{email}]
            })

            if(isallready){
               return res.status(401).json({
                    message:"user already exixts"
                })
            }
            const hash = await bcrypt.hash(password, 10)

            const userid = await userModel.create({
                userName,
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

export  async function loginUserController(req,res) {
    
    const { email, password} = req.body;
    if( !email || !password){
      return res.status(401).json({
            message:"enter credentials"
        })   
    }

    const user = await userModel.findOne({
                email
            })

            if(!user){
               return res.status(401).json({
                    message:"user not  exixts"
                })
            }
            const isPasswordValid = await bcrypt.compare(password, user.password)

                if(!isPasswordValid){
                    return res.status(400).json({
                        message:"invalid password"
                    })
                }
            
        const token = jwt.sign(
        { id: user._id, username: user.username },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
    )
            res.cookie("token",token)



            return res.status(201).json({
                message:"user created succefully",
                user: {
                     id: user._id,
                     username: user.username,
                     email: user.email
                     }
            })
    
}

export async function logoutUser(req,res) {
    const blacklistedToken = req.cookies.token;
    
    if(blackListedToken){
        await blackListedToken.create({blacklistedToken})
    }

    res.clearCookie("token")

    res.status(200).json({
        message:"logout successfully "
    })



}

export async function getMeController(req,res) {
    const user= await userModel.findById(req.user.id)

    res.status(200).json({
         message: "User details fetched successfully",
        user: {
            id: user._id,
            username: user.userName,
            email: user.email
        }
    })
    
}



export default{registerUserController , loginUserController ,logoutUser , getMeController} ;