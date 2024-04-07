import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Fashion from './components/Fashion.jsx'
import Women from './components/Women.jsx'
import Men from './components/Men.jsx'
import Kids from './components/Kids.jsx'
import EachItem from './components/EachItem.jsx'
import Review from './components/Review.jsx'
import Shopping from './components/Shopping.jsx'
import Shipping from './components/Shipping.jsx'
import Payment1 from './components/Payment1.jsx'
import Payment2 from './components/Payment2.jsx'
import Hurray from './components/Hurray.jsx'

const router = createBrowserRouter([{
  path: '/',
  element: <App />
},
{
  path:'/fashion',
  element: <Fashion />
},
{
  path:'/women',
  element: <Women />
},
{
  path:'/men',
  element: <Men />
},
{
  path:'/kids',
  element: <Kids />
},
{
  path:'/eachitem',
  element: <EachItem />
},
{
  path:'/review',
  element: <Review />
},
{
  path:'/shopping',
  element: <Shopping />
},
{
  path:'/shipping',
  element: <Shipping />
},
{
  path:'/payment1',
  element: <Payment1 />
},
{
  path:'/payment2',
  element: <Payment2 />
},
{
  path:'/hurray',
  element: <Hurray />
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>      
    <RouterProvider router={router} />
  </React.StrictMode>,
)
