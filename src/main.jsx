import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routers/router.jsx";
import MyContext from "./context/MyContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MyContext>
      <RouterProvider router={router}></RouterProvider>
    </MyContext>
  </React.StrictMode>
);
