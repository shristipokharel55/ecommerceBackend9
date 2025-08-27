// import axios from "axios";
import React, { useEffect, useState } from "react";
import { handleDeleteOperation, handleGetOperation } from "../../../../handleOperation/handleOperation.js";
import { apiLinks } from "../../../../handleOperation/apiLinks";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const [formData, setFormData] = useState([]);
  const [count,setCount] = useState(1)

  const navigate = useNavigate()

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        console.log(apiLinks.getAllProduct);
        const result = await handleGetOperation(apiLinks.getAllProduct);
        if (result.status == 200) {
          console.log(result.data.data);
          setFormData(result.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [count]);

  const handleDelete = async (id)=>{
    const isConfirmed = confirm("This is going to be deleted")
    if(isConfirmed){
     
      await handleDeleteOperation(apiLinks.deleteProduct(id))
      setCount(count+1)
    }else{
      alert("Not Deleted")
    }
    

  }


  return (
    <div>
      <table className="min-w-full bg-white border undefined">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 h-6 sticky top-0 z-10 transition-all ease-in-out ">
          <tr>
            <th className="px-2 2xl:px-6 py-3 bg-gray-200 w-8">S.N </th>
            <th className="px-2 2xl:px-6 py-3 bg-gray-200 w-8">Image </th>

            <th className="px-2 2xl:px-6 py-3 bg-gray-200">Product Name</th>
            <th className="px-2 2xl:px-6 py-3 bg-gray-200">Brand</th>
            <th className="px-2 2xl:px-6 py-3 bg-gray-200">Created At</th>
            <th className="px-2 2xl:px-6 py-3 bg-gray-200">Action</th>
            {/* <th className="px-2 2xl:px-6 py-3 bg-gray-200 w-6" /> */}
          </tr>
        </thead>
        <tbody className="undefined select-none">



          {formData.map((product,index) => (
            <tr className="border-b" key={product._id}>
              <td className="px-6 py-1.5 whitespace-nowrap text-sm">{index + 1}</td>
              <td className="px-6 py-1.5 whitespace-nowrap text-sm">
                <div className="flex items-center gap-2">
                  <img
                    src={product.imageUrl}

                    alt="image"
                    className="aspect-square rounded-lg object-cover h-16"
                  />
                </div>
              </td>
              <td className="px-6 py-1.5 whitespace-nowrap text-sm  text-center">
                {product.productName}
              </td>
              <td className="px-6 py-1.5 whitespace-nowrap text-sm  text-center">
               {product.brand}
              </td>

              <td className="px-6 py-1.5 whitespace-nowrap text-sm   flex justify-center items-center h-full gap-2">
                <div className="relative inline-block text-left select-none ">
                  <div className="rounded-full py-4 hover:bg-gray-100 focus:outline- cursor-pointer ">
                    <p>{product.price}</p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-1.5 whitespace-nowrap text-sm  text-center">
                <button onClick={()=>{navigate(`/admin/editProduct/${product._id}`)}} className="text-xs font-bold me-2 px-2.5 shadow py-2  bg-green-200 text-green-600 font-semibold rounded-lg shadow">
                  Edit
                </button>
                <button onClick={()=>(handleDelete(product._id))} className="text-xs font-bold me-2 px-2.5 shadow py-2  bg-red-400 text-white font-bold rounded-lg shadow">
                  Delete
                </button>
              </td>
            </tr>

          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Product;