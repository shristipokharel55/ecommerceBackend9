import React,{useEffect,useState} from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { Outlet,useNavigate } from 'react-router-dom'


const Layout = () => {
  const navigate = useNavigate()
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    
     const user = JSON.parse( localStorage.getItem('user'))


     if(!user ||  user.role !== 'ADMIN'){
        navigate('/login')
     }
     else{
      setLoading(false)
     }



  
    
  }, [navigate])
  
  if(loading){
    return (
    <h1> Loading.....  </h1>
    )
  }


  return (
     <div className="grid grid-cols-8   w-dvw h-dvh ">
    {/* sidebar */}
    <Sidebar/>
    <div className="w-full h-full col-span-7">
      <div className="w-full h-dvw flex flex-col  w-full h-dvh overflow-y-auto p-4  bg-white  ">
        <div className="w-full h-dvw h-full flex flex-col bg-white  ">
        {/* navbar */}
        <Navbar/>
          <div className="flex flex-col overflow-y-auto h-full">
           <Outlet/>
          
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Layout