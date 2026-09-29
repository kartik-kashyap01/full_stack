import { createBrowserRouter } from "react-router";

import Login from "./src/features/auth/pages/login";
import Regestration from "./src/features/auth/pages/regestration";
import Protected from "./src/features/auth/components/protected";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registration",
    element: <Regestration />,
  },
  {
    path:"/",
    element:<Protected><h1>home page </h1></Protected> 
  }
]);

export default router;