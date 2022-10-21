import React from 'react'
import "../style/favoriteView.css"
import { useEffect, useState } from "react"
import Heart from "../icons/Vector.png"

function Favorite(props) {

    // useEffect(() => {
    //     const arr = props.favProducts
    //     // console.log(props.favProducts)
    // }, [props.favProducts])



    return (
        <div className='fav-container'>

            <h3>FAVORITES</h3>

            {
                props.favProducts.map((e, i) =>
                (
                    <div className='favCard' key={i}>
                        <div className="favImg"><img src={`https://testbackend.nc-one.com${e.src}`} alt="" /></div>
                        <div className="favDetails ">
                            <p id='favName'>{e.name}</p>
                            <div className='favPriceDiv'>
                                <h3 id='favPrice'> ${e.price}</h3>
                                <img className="favIcon" src={Heart} alt="" />
                            </div>
                        </div>
                    </div>

                )
                )
            }

        </div >
    )
}

export default Favorite