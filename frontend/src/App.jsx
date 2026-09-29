import React from "react";
import router from "../app.routes.jsx";
import { AuthProvider } from "./features/auth/auth.context";
import { RouterProvider } from "react-router";

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;