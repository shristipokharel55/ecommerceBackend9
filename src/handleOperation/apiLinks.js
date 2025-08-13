const BASE_URL = 'http://localhost:4000/api'

export const apiLinks = {
    getAllProduct: `${BASE_URL}/product/getAllProduct`,
    deleteProduct : (id)=>(`${BASE_URL}/product/deleteProductById/${id}`)

}