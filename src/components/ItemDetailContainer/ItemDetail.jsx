import './itemdetail.scss'

const ItemDetail = ({product}) => {
  return (
    <div className="item-detail--container">
        
        <div className="item-image--main">
          <img src={product.image}/>
        </div>
        
        <div className="item-detail--text">
          
          <h3 className="item-detail--title">
            {product.name}
          </h3>

          <p className="item-detail--description">
            {product.description}
          </p>

          <p className="item-detail--price">
            Precio: ${product.price}
          </p>

        </div>
      </div>
  )
}

export default ItemDetail