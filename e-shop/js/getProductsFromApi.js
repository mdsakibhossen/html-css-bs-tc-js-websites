export const getProductsFromApi = async (limit=30)=>{
    const res = await fetch(`https://dummyjson.com/products?limit=${limit}`);
    return await res.json();
}