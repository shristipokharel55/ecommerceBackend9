import axios from "axios"


const BASE_URL ='http://localhost:4000/api'

export const handleGetOperation = async (url,data='')=>{
   try {
      
      const result =  await axios.get(`${BASE_URL}${url}`,{data},{withCredentials:true})
      console.log(result);
      return result
   } catch (error) {
      return error
   }
}

export const handleDeleteOperation = async(url)=>{
   try {
      const result = await axios.delete(`${BASE_URL}${url}`,{withCredentials:true})
      return result
   } catch (error) {
      return error
   }
}



export const handlePostOperation = async (url,data='')=>{
   try {
      console.log(data);
     
      const result =  await axios.post(`${BASE_URL}${url}`,data,{withCredentials:true})
         console.log(result.data);
      return result
   } catch (error) {
      return error
   }
}



// export const handleOperation = async (url,data='',method='get')=>{
//    try {
    
//       const result =  await axios[method](`${BASE_URL}${url}`,{data},{withCredentials:true})
     
//       return result
//    } catch (error) {
//       return error
//    }
// }