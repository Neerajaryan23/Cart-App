import { useEffect, useState } from "react";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import Header from "./components/Header";

const App = () => {
  const [view, setView] = useState(() => {
    return localStorage.getItem("view") || "products";
  });

  // Save the current page view to localStorage
  useEffect(() => {
    localStorage.setItem("view", view);
  }, [view]);

  return (
    <div className="h-screen bg-gray-200 p-6">
      <div className="max-w-6xl mx-auto h-full flex flex-col shadow">
        <Header showCart={() => setView("cart")} />

        <div className="flex-1 overflow-y-auto bg-white rounded-b-xl shadow no-scrollbar">
          {view === "products" && <ProductList />}
          {view === "cart" && <Cart goBack={() => setView("products")} />}
        </div>
      </div>
    </div>
  );
};

export default App;
