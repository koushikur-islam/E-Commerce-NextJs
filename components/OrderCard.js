import Link from "next/link";

const OrderCard = ({ items }) => {
  return (
    <div className="order-card">
      <label>Products: </label>
      <br></br>
      {items.cart.map((item) => (
        <div key={item.id}>
          <ul>
            <li>
              {item.name} [
              {" " +
                item.addedQuantity +
                " Pcs, " +
                item.price * item.addedQuantity +
                " BDT "}
              ]
            </li>
          </ul>
        </div>
      ))}
      <br></br>
      <Link href="/invoice">
        <a>
          <button>View Details</button>
        </a>
      </Link>
    </div>
  );
};
export default OrderCard;
