import React, { useState } from 'react'

const Login = () => {
    const [email,setEmail] = useState('hh')
    const [password,setPassword] = useState('fafa')

    const handleSubmit = async ()=>{
        console.log(email,password);
    }

  return (
  <div>
  <main className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
    <section className="flex w-[30rem] flex-col space-y-10">
      <div className="text-center text-4xl font-medium">Log In</div>
      <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email or Username" className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none" />
      </div>
      <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none" />
      </div>
      <button onClick={handleSubmit} className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400">LOG IN</button>
      <a href="#" className="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300">FORGOT PASSWORD?</a>
      <p className="text-center text-lg">
        No account?
        <a href="#" className="font-medium text-indigo-500 underline-offset-4 hover:underline">Create One</a>
      </p>
    </section>
  </main></div>

  )
}

export default Login
