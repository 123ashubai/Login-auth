import Home from "./pages/Home"
import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import { AuthContext } from "./context/AuthContext";
import Protected from "./pages/Protected";

function App() {

  const [user,setUser] = React.useState("")

  const router = createBrowserRouter(
    [
      {
        path : "/",
        element : <Home/>
      },
      {
        path : "/signup",
        element : <Signup/>
      },
      {
        path : "/signin",
        element : <Signin/>
      },
      {
        path :"/protected",
        element : <Protected/>
      }
    ]
  )
  

  return (
    <>
    <AuthContext.Provider value={{user , setUser}}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
    </>
  )
}

export default App
