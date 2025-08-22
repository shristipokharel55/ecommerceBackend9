import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/admin/dashboard/Dashboard'
import Layout from './components/admin/Layout'
import Product from './pages/admin/dashboard/product/Product'
import Welcome from './pages/Welcome'
import Greetings from './pages/Greetings'
import TrialLayout from './components/TrialLayout'
import Login from './pages/admin/auth/Login'
import ProductCreate from './pages/admin/dashboard/product/ProductCreate'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<h1>Hello world</h1>} />



      <Route element={<Layout/>} >
            <Route path='/admin/' element={<Dashboard />} />
             <Route path="admin/product" element={<Product />} />
             <Route path='admin/createproduct' element={<ProductCreate/>} />
      </Route>

      <Route path='/admin/login' element={<Login/>}/>
      
      <Route element={<TrialLayout/>} >
          <Route path='/welcome' element={<Welcome/>}/>
          <Route path='/greeting' element={<Greetings/>} />
      </Route>


    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App