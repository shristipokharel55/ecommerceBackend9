import React, { useEffect, useState } from 'react'
import { handleDeleteOperation, handleGetOperation } from '../../../../handleOperation/handleOperation'
import { apiLinks } from '../../../../handleOperation/apiLinks'

const Product = () => {

  const [formData,setFormData] = useState([])


  useEffect(()=>{
    const fetchProduct = async()=>{

      try {
        
        const result= await handleGetOperation(apiLinks.getAllProduct)
   
        if(result.status == 200){
         
         
          setFormData(result.data.data)
        }
      } catch (error) {
        console.error(error);
        alert("Failed to fetch product")
      }

    }
    fetchProduct()
  },[])


  const handledDelete = async(id)=>{
    alert(id)
    const result = await handleDeleteOperation(apiLinks.deleteProduct(id))

    console.log(result);

  }

  return (
    <div>

 <div className="flex flex-col overflow-y-auto h-full">
  <table className="min-w-full bg-white border undefined">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 h-6 sticky top-0 z-10 transition-all ease-in-out ">
      <tr>
        <th className="px-2 2xl:px-6 py-3 bg-gray-200 w-8" />
        <th className="px-2 2xl:px-6 py-3 bg-gray-200">Project</th>
        <th className="px-2 2xl:px-6 py-3 bg-gray-200">Brand</th>
        <th className="px-2 2xl:px-6 py-3 bg-gray-200">Action</th>
        <th className="px-2 2xl:px-6 py-3 bg-gray-200">State</th>
        <th className="px-2 2xl:px-6 py-3 bg-gray-200 w-6" />
      </tr>
    </thead>
    <tbody className="undefined select-none">

    {formData.map((product)=>(
      <tr className="border-b" key={product._id}>
       
       
        <td className="px-6 py-1.5 whitespace-nowrap text-sm">
          <div className="flex items-center gap-2">
            <img src={product.imageUrl} alt="image" className="aspect-square rounded-lg object-cover h-16" />
            <p className="font-bold">{product.productName}</p>
          </div>
        </td>
        <td className="px-6 py-1.5 whitespace-nowrap text-sm  text-center">{product.brand}</td>
        <td className="px-6 py-1.5 whitespace-nowrap text-sm   flex justify-center items-center h-full gap-2">
        <td className="px-6 py-1.5 whitespace-nowrap text-sm  text-center">
          <button className="text-xs font-bold me-2 px-2.5 shadow py-2  bg-green-200 text-green-600 font-semibold rounded-lg shadow">edit</button>
          <button onClick={()=>(handledDelete(product._id))} className="text-xs font-bold me-2 px-2.5 shadow py-2  bg-red-500 text-white font-semibold rounded-lg shadow">delete</button>
        </td>
          <div className="relative inline-block text-left select-none ">
            <div className="rounded-full py-4 hover:bg-gray-100 focus:outline- cursor-pointer "><svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2">
                </path>
              </svg></div>
          </div>
        </td>
      </tr>
    ))}

      
    
    
     
   
     
  
    </tbody>
  </table>
</div>


    </div>
  )
}

export default Product