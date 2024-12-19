import { BsCartCheck } from "react-icons/bs";
import '../Navbar/navbar.scss'


const CartWidget = () => {
  return (
    <div className="cart-widget">
        <BsCartCheck size={30} color="white"/>
        <h2>2</h2>
    </div>
  )
}

export default CartWidget