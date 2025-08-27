// import axios from "axios";
import React, { useEffect, useState } from "react";


import { Link } from "react-router-dom";
import { handleGetOperation } from "../../../handleOperation/handleOperation.js";
import { apiLinks } from "../../../handleOperation/apiLinks";

const ProductUser = () => {
  const [formData, setFormData] = useState([]);
  const [count] = useState(1)

  // const navigate = useNavigate()

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

  // const handleDelete = async (id)=>{
  //   const isConfirmed = confirm("This is going to be deleted")
  //   if(isConfirmed){
     
  //     const result =  await handleDeleteOperation(apiLinks.deleteProduct(id))
  //     setCount(count+1)
  //   }else{
  //     alert("Not Deleted")
  //   }
    

  // }



  return (
   
   <div>
  <div className="text-center p-10">
    <h1 className="font-bold text-4xl mb-4">Responsive Product card grid</h1>
    <h1 className="text-3xl">Tailwind CSS</h1>
  </div>
  {/* ✅ Grid Section - Starts Here 👇 */}
  <section id="Projects" className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
    {/*   ✅ Product card 1 - Starts Here 👇 */}
   

    {formData.map((product,index) => (
            
 <div key={index} className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <Link to="#">
        <img src={product.imageUrl} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
        <div className="px-4 py-3 w-72">
          <span className="text-gray-400 mr-3 uppercase text-xs">{product.brand}</span>
          <p className="text-lg font-bold text-black truncate block capitalize">{product.productName}</p>
          <div className="flex items-center">
            <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
            <del>
              <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
            </del>
            <div className="ml-auto">
                <Link to={`/product/${product._id}`}>SeeMore </Link>
            </div>
          </div>
        </div>
      </Link>
    </div>
          ))}
 

   
  </section>
 
</div>



  );
};

export default ProductUser;