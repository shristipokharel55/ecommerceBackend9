import React, { useEffect, useState } from 'react'
import { handleGetOperation } from '../../../../handleOperation/handleOperation.js'
import { apiLinks } from '../../../../handleOperation/apiLinks'
// import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { handlePostOperation } from '../../../../handleOperation/handleOperation.js'
import { useNavigate, useParams } from 'react-router-dom'

const EditProduct = () => {

    const [formData,setFormData] = useState({
        productName : '',
        ram : 0,
        rom : 0,
        description : '',
        price : 0,
        category : '',
        brand : ''
    })

    const [image , setImage] = useState('')

    

    const navigate = useNavigate()
    const params = useParams()
    



    useEffect(()=>{
        const fetchProduct = async()=>{
                const result =await handleGetOperation(apiLinks.getSingleProuct(params.id))
                if(result.status != 200){
                    alert("failed to fetch")
                }else{
                    setFormData({
        productName :result.data.data.productName,
        ram :result.data.data.ram,
        rom : result.data.data.rom,
        description : result.data.data,
        price :result.data.data.price,
        category : result.data.data.category,
        brand :result.data.data.brand
    })
                }
        }

    fetchProduct()
    },[])

    const handleChange = (e)=>{

        setFormData({...formData,[e.target.name] : e.target.value})
    }

    const handleImage =  (e)=>{
        setImage(e.target.files[0])
       
    }


    const handleSubmit =  async (e)=>{
        e.preventDefault()
        const data = new FormData()

        data.append('productName',formData.productName)
        data.append('ram',formData.ram)
        data.append('rom',formData.rom)
        data.append('description',formData.description)
        data.append('price',formData.price)
        data.append('category',formData.category)
        data.append('brand',formData.brand)
        data.append('image', image)

        // for(let keys in formData){data.append(keys , formData.value) }

        // console.log(data);
        
        const result  = await handlePostOperation(apiLinks.createProduct,data)

        if(result.status !== 200){
          alert("Failed to create product")
        }else{
          navigate('/admin/product')
        }


    }



  return (
    <div> <div><div className="bg-white border border-4 rounded-lg shadow relative m-10">
    <div className="flex items-start justify-between p-5 border-b rounded-t">
      <h3 className="text-xl font-semibold">
        Edit product
      </h3>
      <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="product-modal">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
      </button>
    </div>
    <div className="p-6 space-y-6">
      <form  onSubmit={handleSubmit}>
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="product-name" className="text-sm font-medium text-gray-900 block mb-2">Product Name</label>
            <input type="text" value={formData.productName} onChange={handleChange} name="productName" id="product-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Apple Imac 27”" required />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="category" className="text-sm font-medium text-gray-900 block mb-2">Category</label>
            <input type="text" value={formData.category} onChange={handleChange} name="category" id="category" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Electronics" required />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="brand" className="text-sm font-medium text-gray-900 block mb-2">Brand</label>
            <input type="text" value={formData.brand} onChange={handleChange} name="brand" id="brand" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Apple" required />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="price" className="text-sm font-medium text-gray-900 block mb-2">ROM</label>
            <input type="number" value={formData.rom} onChange={handleChange} name="rom" min={0} id="price" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="$2300" required />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="brand" className="text-sm font-medium text-gray-900 block mb-2">RAM</label>
            <input type="number" value={formData.ram} onChange={handleChange} name="ram" id="ram" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Apple" required />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="brand" className="text-sm font-medium text-gray-900 block mb-2">Enter Picture of product</label>
            <input type="file" onChange={handleImage}  name="image" id="ram" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Apple" required />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="price" className="text-sm font-medium text-gray-900 block mb-2">Price</label>
            <input type="number" value={formData.price} onChange={handleChange} name="price" min={0} id="price" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="$2300" required />
          </div>
          <div className="col-span-full">
            <label htmlFor="product-details" className="text-sm font-medium text-gray-900 block mb-2">Product Details</label>
            <textarea id="description" name='description' value={formData.description} onChange={handleChange} rows={6} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4" placeholder="Details"  />
          </div>
        </div>
    <div className="p-6 border-t border-gray-200 rounded-b">
      <button className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">Save all</button>
    </div>
      </form>
    </div>
  </div></div></div>
  )
}
export default EditProduct