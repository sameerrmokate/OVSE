import Login from "./Components/login";
import Register from "./Components/Register";
import Home from "./Components/Home"
import {createBrowserRouter,RouterProvider} from "react-router-dom"
// import "./style.css"

const router = createBrowserRouter([
  {path : "/home" , element: <Home/>},
  {path : '/', element: <Login/>},
  {path : "/register" , element : <Register/>}
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
