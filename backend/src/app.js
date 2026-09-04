import express from "express"
import route from "./routes/registere.user.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser())
app.use("/api/register", route)

export default app;