import blackListedToken from "../models/blackedList.model.js";
import jwt from "jsonwebtoken"
export async function authMiddleware(req, res, next) {
    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({
            message:"token not present"
        })
    }

  const  isToken = await blackListedToken.findOne({token})

  if(isToken){
    return res.status(401).json({
        message:"user is not login"
    })
  }

  try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        req.user = decoded

        next()

    } catch (err) {

        return res.status(401).json({
            message: "Invalid token."
        })
    }

}

export default authMiddleware;