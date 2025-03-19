import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Router, Routes,Link, RouterProvider } from 'react-router-dom'
import BaseRouter from './tsdemo/router1.tsx'
import Router2 from './tsdemo/router2.tsx'

function ReactDemo() {
  return <h2>哈哈哈哈 <Link to="..">back</Link></h2>
}

function NotFound() {
  return <h2>404</h2>
}
// createRoot(document.getElementById('root')!).render(
//    <BrowserRouter>
//     {/*  路由使用方式1
//     <Routes>
//       <Route path='/' element = {<App />}></Route>
//       <Route path='/react' element = { <ReactDemo /> }></Route>
//       <Route path='*' element = { <NotFound/> }></Route>
//     </Routes>  */}
//     {/*路由使用方式2
//      <BaseRouter /> */}
    
//    </BrowserRouter>
  
//   // <StrictMode>
//   //   <App />
//   // </StrictMode>,
// )
// 路由使用方式3
// <RouterProvider router={Router2}/>
createRoot(document.getElementById('root')!).render(
  <RouterProvider router={Router2}/>
)
