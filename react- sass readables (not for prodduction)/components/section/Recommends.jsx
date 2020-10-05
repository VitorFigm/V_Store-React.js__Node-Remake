import React, { useState,useEffect } from 'react'
// import { request_prod_list } from '../../general_functions'

export default (props) => {
    const { prod_list, prod_list_change } = props

    let [loading,loading_change] = useState()
    ///loading
    useEffect(()=>{
        if(prod_list!==undefined)
            loading_change(undefined)
            else
                loading_change(<div id="loading_prods">
                <h1>Loading...</h1>
            </div>)
    },[prod_list])

    ///first productlist
    window.addEventListener('load',()=>{
        
    })

    
    const prod_info = prod_list!==undefined? 
    prod_list.map((prod, i) => (
        <>
            <a className="product" href={prod.url} target="_blank" rel="noopener noreferrer">
                <img src={prod.image} id={prod.image} />
                <div id="product_content">
                    <div className="name" 
                    id={prod.img + "_name"}>{
                    prod.title.slice(0,60) +"..."}</div>
                    <div className="price" id={prod.img + "_price"}>${prod.price}</div>
                </div>
            </a>
        </>
    )):(<></>)

    return (<div className="product_container">
        {loading}
        {prod_info}
    </div>
    )
}