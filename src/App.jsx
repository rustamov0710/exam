import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home'
import SinglePage from './components/SinglePage/SinglePage'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: ':foodId',
      element: <SinglePage/>
    }
  ]
)

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
