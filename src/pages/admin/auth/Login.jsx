import React, { useState } from "react";
import { handlePostOperation } from "../../handleOperation/handleOpertion";
import { apiLinks } from "../../handleOperation/apiLinks";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const navigate =   useNavigate()

  const handleSubmit = async () => {
    try {

     

      const result = await handlePostOperation(apiLinks.login,{email,password});

      console.log(result);

      if (result.status !==200) {
        throw new Error("Login Faild ")
      }

    

      localStorage.setItem('user',JSON.stringify(result.data.data))

      if(result.data.data.role == 'ADMIN'){
            navigate('/admin/')
      }
      else{
        navigate('/')
      }
      
      

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <main className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
        <section className="flex w-[30rem] flex-col space-y-10">
          <div className="text-center text-4xl font-medium">Log In</div>
          <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Email or Username"
              className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
            />
          </div>
          <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400"
          >
            LOG IN
          </button>
          <a
            href="#"
            className="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300"
          >
            FORGOT PASSWORD?
          </a>
          <p className="text-center text-lg">
            No account?
            <a
              href="#"
              className="font-medium text-indigo-500 underline-offset-4 hover:underline"
            >
              Create One
            </a>
          </p>
        </section>
      </main>
    </div>
  );
};

export default Login;