import Head from "next/head";
import Link from "next/link";
import OrderCard from "../../components/OrderCard";
const Orders = ({ orders }) => {
  return (
    <>
      <Head>
        <title>My Orders</title>
      </Head>
      <div className="orders-container">
        <h2>My Orders</h2>
        <br></br>
        {orders.map((order) => (
          <>
            <OrderCard key={1} items={order}></OrderCard>
            <br></br>
          </>
        ))}
      </div>
    </>
  );
};
export default Orders;

export const getServerSideProps = async () => {
  let res = await fetch("http://localhost:3000/api/order");
  const orders = await res.json();
  // const carts = [];
  // for (let i = 0; i < orders.length; i++) {
  //   carts.push(orders[i].cart);
  // }
  return {
    props: {
      orders,
    },
  };
};
