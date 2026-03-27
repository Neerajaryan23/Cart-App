import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import EmptyMsg from "./EmptyMsg";
import backIcon from "../Photos/back.png";

const Cart = ({ goBack }) => {
  const { cart, increaseQty, decreaseQty, removeBtn } = useContext(CartContext);

  // Calculate total price of items in the cart
  const totalPrice = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Header */}
      <div className="bg-white px-4 py-3 flex items-center gap-3 shadow-sm shrink-0">
        <button onClick={goBack} className="p-2 rounded-full hover:bg-gray-100">
          <img className="h-5 w-5" src={backIcon} alt="back" />
        </button>
        <h2 className="text-lg font-bold text-gray-800">My Cart</h2>
        <span className="text-sm text-gray-400">({cart.length} items)</span>
      </div>

      {/* Items */}
      <div className="flex-1 overflow-y-auto px-3 py-3 flex flex-col gap-3 no-scrollbar">
        {cart.length === 0 ? (
          <EmptyMsg />
        ) : (
          cart.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-sm p-3">
              {/* Row 1: Name + Remove */}
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="text-x font-bold text-gray-800">{item.name}</p>
                  <p className="text-x text-gray-500 mt-0.5">
                    ₹{item.price} each
                  </p>
                </div>
                <button
                  onClick={() => removeBtn(item)}
                  className="text-x text-red-500 font-semibold ml-2 shrink-0"
                >
                  Remove
                </button>
              </div>

              {/* Row 2: Qty controls + Subtotal */}
              <div className="flex items-center justify-between">
                {/* − qty + */}
                <div className="flex items-center rounded-lg overflow-hidden border border-gray-200">
                  <button
                    onClick={() => decreaseQty(item)}
                    className="w-9 h-9 bg-gray-100 text-gray-700 text-xl font-bold flex items-center justify-center"
                  >
                    −
                  </button>
                  <span className="w-10 text-center text-sm font-bold text-gray-800">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => increaseQty(item)}
                    className="w-9 h-9 bg-blue-600 text-white text-xl font-bold flex items-center justify-center"
                  >
                    +
                  </button>
                </div>

                {/* Subtotal */}
                <p className="text-s font-bold text-gray-800">
                  ₹{item.price * item.quantity}
                </p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Bottom Bar */}
      <div className="bg-white px-2 py-1 shadow-[0_-2px_8px_rgba(0,0,0,0.06)]">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-500">Delivery</span>
          <span className="text-sm text-green-600 font-semibold">Free</span>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-base font-bold text-gray-800">Total</span>
          <span className="text-lg font-bold text-gray-800">₹{totalPrice}</span>
        </div>
        <button className="w-full bg-orange-500 text-white text-base font-semibold py-2 rounded-xl">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
