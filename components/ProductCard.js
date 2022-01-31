import Link from "next/link";
import Image from "next/image";
import demoImage from "../public/ipad-pro.jpg";
import { CartState } from "../components/Context";

const ProductCard = ({ product }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="product-card">
      <Image
        src={`/${product.image}`}
        className="product-image"
        width="200"
        height="200"
        alt="No Image..."
      ></Image>
      <br></br>
      <br></br>
      <label>
        <Link href={"/" + product.category + "/" + product.id}>
          {product.name}
        </Link>
      </label>
      <br></br>
      <br></br>
      <span>Price : {product.price} BDT</span>
      <br></br>
      <span>Aavailable : {product.quantity} Pcs</span>
      <p>{product.description}</p>
      <button>Quick View</button>
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
      <Link href={"/" + product.category + "/" + product.id}>
        <a>
          <button>View Details</button>
        </a>
      </Link>
    </div>
  );
};
export default ProductCard;
