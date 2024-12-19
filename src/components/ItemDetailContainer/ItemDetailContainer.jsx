import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { getProductsFromJson } from "../../data/data.js"
import './itemdetail.scss'


const ItemDetailContainer = () => {

    const {productId} = useParams({})
    const [productDetails, setProductDetails] = useState({})

    useEffect(() => {

        getProductsFromJson()
            .then((data) => {
                const findProductDetails = data.find((productDetail) => productDetail.id == productId);
                setProductDetails(findProductDetails);
            })
        }, [])


  return (
    <ItemDetail product={productDetails}/>
  )
}

export default ItemDetailContainer