import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App.jsx'
import Home from "./Components/Home.jsx"
import Products from "./Components/Products.jsx"
import Cart from './Components/Cart/Cart.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Login from './Components/Login.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "products",
                element: <Products />
            },
            {
                path: "cart",
                element: <Cart />
            },
            {
                path: "login",
                element: <Login />
            }
        ]
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
