import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ReactImageMagnify from 'react-image-magnify';
import "../style/productPageView.css"
import Heart from "../icons/Vector.png"
import zoom from "../icons/zoomIcon.png"
import Header from "../views/header.jsx"

function ProductPage(props) {
    const p = useParams()
    // console.log(p)
    // console.log(p.id)
    const id = p.id

    const [product, setProduct] = useState({})

    useEffect(() => {
        fetch(`https://testbackend.nc-one.com/image?id=${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])
    return (
        <>
            <Header name="PRODUCT Page" />

            <div className="content">
                <div className="image">
                    <ReactImageMagnify {...{
                        smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: true,
                            src: `https://testbackend.nc-one.com${product.src}`
                        },
                        largeImage: {
                            src: `https://testbackend.nc-one.com${product.src}`,
                            width: 1200,
                            height: 1800
                        }
                    }} />
                    <img className='zoomIcon' src={zoom} alt="" />
                </div>
                <div className="details">
                    <h1 id='name'>{product.name}</h1>
                    <div className='price-div '>
                        <h3 id='price'> ${product.price}</h3>
                        <img className="icon" onClick={() => props.handleLike(product)} src={Heart} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductPage