import axios from 'axios'

const BASE_URL = 'http://localhost:4000/api'

const handleGetOperation = async(url) => {
    const result = await axios.get(`${BASE_URL}${url}`, { withCredentials: true })
    
    return result.data.data
}

const handlePostOperation = async(url, data) => {
    const result = await axios.post(url,data, { withCredentials: true })
    return result.data
}

export default {handleGetOperation, handlePostOperation}