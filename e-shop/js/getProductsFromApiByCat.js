import { getProductsFromApi } from './getProductsFromApi.js';

export const getProductsFromApiByCat = async (limit,catName="all")=>{
    let products = await getProductsFromApi(limit)
    
    if (catName !== "all") {
        const res = await fetch(`https://dummyjson.com/products/category/${catName}?limit=${limit}`);
        products = await res.json();
    }
    return products;
}