import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'

function ReactDemo() {
  return <h2>哈哈哈哈</h2>
}
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element = {<App />}></Route>
      <Route path='/react' element = { <ReactDemo /> }></Route>
    </Routes> 
  </BrowserRouter>

  // <StrictMode>
  //   <App />
  // </StrictMode>,
)
