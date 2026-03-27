import { useContext } from "react";
import ProductCart from "./ProductCart";
import { CartContext } from "../context/CartContext";

const ProductList = () => {
  const { products, loading } = useContext(CartContext);

  if (loading) {
    return <p className="p-4 text-gray-500">Loading products...</p>;
  }
  return (
    <>
      <h2 className="sticky top-0 bg-white z-10 px-4 py-3 text-2.5xl pt-4">
        Products
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {products.map((product) => (
          <ProductCart key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
