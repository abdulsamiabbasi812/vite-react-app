import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Navbar from './components/Navbar'
import { useForm } from 'react-hook-form'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Navbar /><Home /></>,
    },
    {
      path: '/about',
      element: <><Navbar /><About /></>,
    },
    {
      path: '/contact',
      element: <><Navbar /><Contact /></>,
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
