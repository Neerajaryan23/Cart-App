import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import bagIcon from "../Photos/shopping-bag.png";

const CartItem = ({ showCart }) => {
  const { cart } = useContext(CartContext);

  // Calculate total quantity of items in the cart
  const totalItem = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
  return (
    <>
      <button
        onClick={showCart}
        type="button"
        class="btn btn-outline-secondary position-relative"
      >
        <img className="h-10" src={bagIcon}></img>
        {totalItem > 0 && (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {totalItem}
            <span className="visually-hidden">items in cart</span>
          </span>
        )}
      </button>
    </>
  );
};

export default CartItem;