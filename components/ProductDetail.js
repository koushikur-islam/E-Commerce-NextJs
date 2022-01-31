import Image from "next/image";
import demoImage from "../public/ipad-pro.jpg";
import { CartState } from "../components/Context";
const ProductDetail = ({ product }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <div className="product-detail-wrapper">
      <div className="product-detail">
        <div className="image-box">
          <Image src={`/${product.image}`} width="300" height="300"alt="No Image..."></Image>
        </div>
        <div className="details-box">
          {cart.some((x) => x.id === product.id) ? (
            <button
              onClick={() => {
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: product,
                });
              }}
            >
              Remove from Cart
            </button>
          ) : (
            <button
              onClick={() => {
                dispatch({
                  type: "ADD_TO_CART",
                  payload: product,
                });
              }}
            >
              Add to Cart
            </button>
          )}
          <br></br>
          <hr></hr>
          <br></br>
          <label>{product.name}</label>
          <br></br>
          <span>Price : {product.price} BDT</span>
          <br></br>
          <span>Available : {product.quantity} Pcs</span>
          <br></br>
          <br></br>
          <hr></hr>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;
