import { useParams } from "react-router-dom";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();

  return (
    <div className="details">
      <h1>Product Details</h1>

      <h2>Selected Product ID : {id}</h2>
    </div>
  );
}

export default ProductDetails;