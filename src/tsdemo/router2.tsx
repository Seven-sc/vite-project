import { createBrowserRouter,Link, Outlet, useLoaderData, useParams } from "react-router-dom";
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

  function Goods2() {
    const loaderData = useLoaderData();
    console.log("loaderData：", loaderData);

    return (
      <div>
      <h2>Goods2</h2>
      <Outlet></Outlet>
    </div>
    )
  }

  function goodsLoader() {
    console.log('goodsLoader init');
    return {goodsName: "Iphone16 Pro Max"}
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
    },
    {
      path: '/goods2',
      element: <Goods2/>,
      loader: goodsLoader,
      children:[
        {
          path:'list',
          element:(
            <div>
              <p>商品1</p>
              <p>商品2</p>
            </div>
          )
        },
        {
          path:'cart',
          element:(
            <div>
              <p>苹果手机</p>
              <p>华为手机</p>
            </div>
          )
        }
      ]
    }
],{
  basename: '/app'
})

export default router;