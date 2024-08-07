export const getCategoriesFromApi = async ()=>{
    const res = await fetch(`https://dummyjson.com/products/categories`);
    return await res.json();
}
// console.log(await getCategoriesFromApi());