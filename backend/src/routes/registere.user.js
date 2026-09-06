import {registerUserController, loginUserController, logoutUser, getMeController} from "../controller/user.controller.js";

import { Router } from "express";
import authMiddleware from "../middleware/auth.middleware.js";

const route= Router();

route.post("/register", registerUserController);
route.post("/login", loginUserController);
route.get("/logout", logoutUser);
route.get("/get-me", authMiddleware, getMeController);
export default route;