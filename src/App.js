import { Routes, Route } from 'react-router-dom'
import Favorite from './components/favorite'
import ProductList from './components/productList'
import ProductPage from './components/productPage'
import React, { useState, useEffect } from 'react'



function App() {

  // ----------------------Get products---------------------
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://testbackend.nc-one.com/image")
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])


  // ------------Add Fav products-------------------------------
  const [favProduct, setFavProduct] = useState([])

  const handleLike = (product) => {
    setFavProduct([...favProduct, product])
  }

  return (
    <div className="App">
      <Favorite favProducts={favProduct} />
      <Routes>
        <Route path='/' element={<ProductList products={products} handleLike={handleLike} />} />
        <Route path='/products/:id' element={<ProductPage handleLike={handleLike} />} />
      </Routes>
    </div>
  );
}

export default App;


// const p = products.indexOf(product)

//     setFavProduct(products[p])
//     console.log(favProduct);
    // const basket = products.filter(e => e.id === product.id)
    // console.log(basket)
    // setFavProduct([...favProduct, basket])
    // console.log(favProduct)