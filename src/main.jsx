import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./Pages/Landing/index.jsx";
import Dashbboard from "./Pages/Dashboard/index.jsx";
import Login from "./Pages/Login/index.jsx";
import NexusContextProvider from "./Context/NexusContext.jsx";

// import { createTheme, MantineProvider } from "@mantine/core";

// const theme = createTheme({
//   /** Your theme override here */
// });

// function Demo() {
//   return (
//     <MantineProvider theme={theme}>
//       <App />
//     </MantineProvider>
//   );
// }

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing></Landing>,
    // errorElement: <NotFound></NotFound>,
  },

  {
    path: "/login",
    element: <Login></Login>,
  },

  {
    path: "/dashboard",
    element: <Dashbboard></Dashbboard>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <NexusContextProvider>
      <RouterProvider router={router} />
    </NexusContextProvider>
  </React.StrictMode>
);
