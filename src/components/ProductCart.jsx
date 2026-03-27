import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const emojiMap = {
  "MacBook Pro M3": "💻",
  "iPhone 15 Pro": "📱",
  "Sony WH-1000XM5": "🎧",
  "Samsung 4K Monitor": "🖥️",
  "Apple Watch Ultra": "⌚",
  "iPad Pro M2": "📟",
  "RTX 4090 GPU": "🎮",
  "Keychron K2 Keyboard": "⌨️",
  "Logitech MX Master 3": "🖱️",
  "GoPro Hero 12": "📷",
  "Samsung 990 Pro SSD": "💾",
  "Anker 240W Charger": "🔌",
};

const ProductCart = ({ product }) => {
  const { addToCart, cart } = useContext(CartContext);

  const inCart = cart.find((i) => i.id === product.id);
  const emoji = emojiMap[product.name] || "Loading...";

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300">
      {/* Emoji Image */}
      <div className="bg-blue-50 h-24 flex items-center justify-center text-5xl">
        {emoji}
      </div>

      {/* Info */}
      <div className="p-3 flex flex-col flex-1">
        <p className="text-sm font-bold text-gray-800 truncate mb-1">
          {product.name}
        </p>
        <p className="text-sm font-bold text-blue-600 mb-3">
          ₹{product.price.toLocaleString()}
        </p>
        <button
          onClick={() => addToCart(product)}
          disabled={!!inCart}
          className={`w-full py-2 rounded-xl text-xs font-bold 
            ${inCart ? "bg-green-100 text-green-700" : "bg-blue-600 text-white"
            }`}
        >
          {inCart ? "✓ Added" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
