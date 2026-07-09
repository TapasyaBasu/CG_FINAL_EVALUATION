import { Link } from "react-router-dom";
import products from "../data/products";
import "./Products.css";

function Products() {
  return (
    <div className="products">
      <h1>Our Products</h1>

      {products.map((product) => (
        <div className="card" key={product.id}>
          <h2>{product.name}</h2>

          <p>{product.price}</p>

          <Link to={`/products/${product.id}`}>
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Products;