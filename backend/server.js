import app from "./src/app.js";
import connectDB from "./src/database/database.js";

import dns from "dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);
connectDB();
app.listen(5000,()=>{
    console.log("server started 5000 ..............")
})