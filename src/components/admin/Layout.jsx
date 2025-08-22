import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { Outlet, useNavigate } from 'react-router-dom'

const Layout = () => {

const navigate =  useNavigate()
  
  useEffect(()=>{
    const data = localStorage.getItem('user')
    const  user = JSON.parse(data)
    console.log(user);
  console.log(  user.role);
    if(!user || user.role != 'ADMIN'){
      alert("user Not Logged In")

      navigate('/admin/login')
    }
  },[])

  return (
    <div className='h-screen grid grid-cols-[280px_1fr] grid-rows-[100px_1fr]'>


    <div className='row-span-2'>

     <Sidebar/>
    </div>

   <div className='col-span-1'>
    <Navbar/>
   </div>
<div>

    <Outlet />

</div>


    </div>
  )
}

export default Layout