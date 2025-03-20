import { createBrowserRouter,Link, useParams } from "react-router-dom";
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

  function Order() {
    const params =  useParams()
    return <h2>OrderId:{params.id}</h2>
  }
  function Goods() {
    const params = useParams()
    return <h2>goodsId:{params.goodsId} OrderId:{params.orderId}</h2>
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
    },
    {
      path: '/order/:id',
      element: <Order/>
    },
    {
      path: '/goods/:goodsId/order/:orderId',
      element: <Goods/>
    }
],{
  basename: '/app'
})

export default router;