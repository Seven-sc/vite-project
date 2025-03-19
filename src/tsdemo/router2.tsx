import { createBrowserRouter,Link } from "react-router-dom";
import App from "../App";
function ReactDemo() {
    return <h2>哈哈哈哈 <Link to="..">back</Link></h2>
  }
  
  function NotFound() {
    return <h2>404</h2>
  }

  function Apple() {
    return <h2>Apple2</h2>
  }
const router = createBrowserRouter([
    {
        path:'',
        element: <App />
    },
    {
        path:'/react',
        element: <ReactDemo />
    },
    {
        path:'/*',
        element: <NotFound />
    },
    {
        path:'/Apple',
        element: <Apple />
    }
])

export default router;