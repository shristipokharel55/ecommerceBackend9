import React, { useState } from 'react'
import { handlePostOperation } from '../../handleOperation/handleOperation.js'
import { apiLinks } from '../../handleOperation/apiLinks'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
const Register = () => {
    const navigate = useNavigate()
    const [formData , setFormData] = useState({
        email:'',
        phone:'',
        userName:'',
        password:'',
         confirmPassword:''
    })

    const handleChange =  (e)=>{
        setFormData({...formData,[e.target.name]: e.target.value})
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        
      const result =   await  handlePostOperation(apiLinks.register,formData)

    if(result.status == 201){
                toast.success("Success Notification !", {
  position: "top-right",
        })
              
                
            navigate('/login')
    }else{
        alert("Failed to register User")
    }
        
        
    }
  


  return (
   <div className='h-[100vh] w-[100vw]'>
    <ToastContainer/>
  <div className="bg-white h-[100vh] w-[100vw] shadow-xl rounded-2xl w-full max-w- p-6 sm:p-8">
    <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Create an Account</h2>
    <form  onSubmit={handleSubmit} className="space-y-5">
      {/* Full Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
        <input value={formData.userName} onChange={handleChange} type="text" id="name" name="userName" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" />
      </div>
      {/* Email */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
        <input value={formData.phone} onChange={handleChange} type="number" id="phone" name="phone" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" />
      </div>
      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
        <input value={formData.email} onChange={handleChange} type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" />
      </div>
      {/* Password */}
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
        <input type="password" onChange={handleChange} value={formData.password} id="password" name="password" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" />
      </div>
      {/* Password */}
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
        <input type="password" onChange={handleChange} value={formData.confirmPassword} id="pasasword" name="confirmPassword" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" />
      </div>
      {/* Terms */}
      <div className="flex items-center text-sm">
        <input type="checkbox" id="terms" required className="w-4 h-4 mr-2 text-blue-600 rounded focus:ring-0" />
        <label htmlFor="terms"  className="text-gray-600">I agree to the <a href="#" className="text-blue-600 underline">terms &amp; conditions</a></label>
      </div>
      {/* Submit Button */}
      <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition-all duration-200">
        Register
      </button>
      {/* Login Redirect */}
      <p className="text-center text-sm text-gray-600 mt-4">
        Already have an account?
        <a href="/login" className="text-blue-600 font-medium hover:underline">Login</a>
      </p>
    </form>
  </div>
  </div>

  )
}

export default Register