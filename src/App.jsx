import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import Layout from "./components/admin/Layout";
import Product from "./pages/admin/dashboard/product/Product";
import Login from "./pages/auth/Login";
import CreateProduct from "./pages/admin/dashboard/product/CreateProduct";
import EditProduct from "./pages/admin/dashboard/product/EditProduct";
import Home from "./pages/user/Home";
import ProductUser from "./pages/user/product/product";
import SingleProduct from "./pages/user/product/SingleProduct";
import UserLayout from "./components/user/UserLayout";
import Register from "./pages/auth/Register";
import { ToastContainer} from "react-toastify";




const App = () => {
  
  return (
    <>
      <BrowserRouter>
        <Routes>

         
         
          <Route path="/admin/" element={<Layout />}>
            <Route path="" element={<Dashboard />} />
            <Route path="product" element={<Product />} />
            <Route path="createProduct" element={<CreateProduct/>}/>
            <Route path='editProduct/:id' element= {<EditProduct/>} /> 
          </Route>

        <Route  element={<UserLayout/>} >
            <Route path="/" element={<Home/>} />
            <Route path="/product" element={<ProductUser/>}  />
            <Route path="/product/:id" element={<SingleProduct/>} />
        </Route>


        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />

        
          
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;