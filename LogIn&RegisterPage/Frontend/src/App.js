import Login from "./Components/login";
import Register from "./Components/Register";
import Home from "./Components/Home";
import Voting_tokens from "./Components/Voting_tokens"
import Nomination from "./Components/Nomination"
import {createBrowserRouter,Form,RouterProvider} from "react-router-dom"
// import "./style.css"

const router = createBrowserRouter([
  {path : "/home" , element: <Home/>},
  {path : '/', element: <Login/>},
  {path : "/register" , element : <Register/>},
  {path : "/Voting_tokens" , element: <Voting_tokens/>},
  {path : "/Nomination" , element: <Nomination/>}
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
