import CartItem from "./CartItem";
import cartIcon from "../Photos/shopping-cart.png";

const Header = ({ showCart }) => {
  return (
    <div className="flex justify-between items-center mb-10 bg-white p-4 rounded-t-xl shadow">
      <div className="flex gap-4 items-center">
        <img className="h-12" src={cartIcon} alt="cart"></img>
        <h2 className="text-3xl font-bold text-gray-800">My Store</h2>
      </div>
      <CartItem showCart={showCart} />
    </div>
  );
};

export default Header;
