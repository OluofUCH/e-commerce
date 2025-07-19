const fetchedProducts = async () => {
     const data = await fetch('https://fakestoreapi.com/products')
  const pro = await data.json();
  return pro;
}

export default fetchedProducts;