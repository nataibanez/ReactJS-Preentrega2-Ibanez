import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProductsFromJson } from "../../data/data.js"
import './itemlistcontainer.scss'
import ItemList from "./ItemList.jsx"


const ItemListContainer = ({motd}) => {

  // Variables de estado y params

  const [products, setProducts] = useState ([]);
  const [isLoading, setIsLoading] = useState(true);
  const {categoryId} = useParams();

  // useEffect para recuperar datos de los productos desde la promesa

  useEffect(() => {
    
    setIsLoading(true);

    getProductsFromJson()
      .then((data) => {
        if (categoryId) {
          const filteredProducts = data.filter((product) => product.category === categoryId);
          setProducts(filteredProducts);  
        } 
        else {
          setProducts(data);
        }})

      .catch((error) => {
        console.error("Error gestionando la promesa.. ", error);
        })

      .finally (() => {
        setIsLoading(false);
        console.log("la promesa funciona");
        })

    }, [categoryId]);
    

  return (
    <div className='body--motd'>
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer