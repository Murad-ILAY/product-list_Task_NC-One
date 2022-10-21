import React, { useState, useEffect } from 'react'
import Favorite from "./favorite"
import { NavLink, Link } from 'react-router-dom'
import "../style/productListView.css"
import Heart from "../icons/Vector.png"
import Header from "../views/header.jsx"

function ProductList(props) {
    return (
        <>
            <Header name="PRODUCT LIST PAGE" />
            <div className="container">
                <div className="cards">
                    {
                        props.products.map((product, i) =>
                        (
                            <div key={i} className="card">
                                <Link className='imgDiv' to={`/products/${product.id}`}> <img className='img'
                                    src={`https://testbackend.nc-one.com${product.src}`} alt="" /></Link>
                                <div>
                                    <p className="text">{product.name}</p>
                                    <div className='flex'>
                                        <h3> $ {product.price}</h3>
                                        <img className="icon" onClick={() => props.handleLike(product)} src={Heart} alt="" />
                                    </div>

                                </div>
                            </div>
                        )
                        )
                    }


                </div>
            </div>
        </>
    )
}

export default ProductList