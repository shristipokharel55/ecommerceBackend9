import { useState } from "react"
import { Form } from "react-router-dom"
import { handlePostOperation } from "../../../../handleOperation/handleOperation"
import { apiLinks } from "../../../../handleOperation/apiLinks"


const ProductCreate = () => {

    const [formdata,setformdata] = useState({
        productName : '',
        brand : '',
        ram : 0,
        rom : 0,
        display : '',
        description : ''
    })
    const [file,setFile] = useState(null)

    const handleChange = (e)=>{
        const name= e.target.name
        const value = e.target.value


        setformdata({...formdata,[name]: value})
       
        
    }



   const handleSubmit = async()=>{
        console.log(formdata);

        const  data = new  FormData()

        // console.log(typeof formdata);
        // console.log(typeof data);

        console.log("hello file ",file);
       
        data.append('productName',formdata.productName)
        data.append('brand',formdata.brand)
        data.append('ram',formdata.ram)
        data.append('rom',formdata.rom)
        data.append('description',formdata.description)
        data.append('display',formdata.display)
        data.append('image',file)


        await handlePostOperation(apiLinks.createProduct,data)
      

   }

   const  handleImageChange = (e)=>{
        
        setFile(e.target.files[0])
   }



  return (
   <div><div className="bg-gray-100 dark:bg-gray-900">
    <div className="w-full max-w-3xl mx-auto p-8">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border dark:border-gray-700">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Checkout</h1>
        {/* Shipping description */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">Shipping description</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="productName" className="block text-gray-700 dark:text-white mb-1">Product Name</label>
              <input type="text" value={formdata.productName} onChange={handleChange} name="productName" id="first_name" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
            </div>
            <div>
              <label htmlFor="brand" className="block text-gray-700 dark:text-white mb-1">Brand</label>
              <input type="text" id="brand" value={formdata.brand} onChange={handleChange} name="brand" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="description" className="block text-gray-700 dark:text-white mb-1">description</label>
            <textarea type="text" id="description" value={formdata.description} onChange={handleChange} name="description" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
          </div>
          <div className="mt-4">
            <label htmlFor="city" className="block text-gray-700 dark:text-white mb-1">Display</label>
            <input type="text" id="city" value={formdata.display} onChange={handleChange} name="display" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
          </div>
          <div className="mt-4">
            <label htmlFor="city" className="block text-gray-700 dark:text-white mb-1">Image</label>
            <input type="file" id="city"  onChange={handleImageChange} required  className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label htmlFor="state" className="block text-gray-700 dark:text-white mb-1">RAM</label>
              <input type="Number" id="state" value={formdata.ram} onChange={handleChange} name="ram" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
            </div>
            <div>
              <label htmlFor="zip" className="block text-gray-700 dark:text-white mb-1">ROM</label>
              <input type="Number" id="zip"value={formdata.rom} onChange={handleChange} name="rom" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
            </div>
          </div>
        </div>
        {/* Payment Information */}
       
        <div className="mt-8 flex justify-end">
          <button onClick={handleSubmit} className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-700 dark:bg-teal-600 dark:text-white dark:hover:bg-teal-900">Create Product</button>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default ProductCreate