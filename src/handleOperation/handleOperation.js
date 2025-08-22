import axios from "axios"


export  const  handleGetOperation = async (url)=>{
    const result =    await  axios.get(url,{withCredentials:true})

   return result

}

export const handlePostOperation = async (url,data)=>{
    const result = await axios.post(url,data,{withCredentials:true})
   
    return result.data;
}


export const handleDeleteOperation = async (url)=>{

    const result = await axios.delete(url,{withCredentials:true})
    return result

}


