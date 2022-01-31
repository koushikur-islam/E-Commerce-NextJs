import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { CartState } from "../../components/Context";

export default function Cart() {
  const router = useRouter();

  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [subTotal, setSubTotal] = useState();
  useEffect(() => {
    setSubTotal(
      cart.reduce(
        (acc, curr) => acc + Number(curr.price) * curr.addedQuantity,
        0
      )
    );
  }, [cart]);

  return (
    <>
      <Head>
        <title>Cart</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="cart-container">
        <label className="header-label">Cart</label>
        <br></br>
        <br></br>
        {cart.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Total Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>
                    <select
                      value={item.addedQuantity}
                      onChange={(e) =>
                        dispatch({
                          type: "CHANGE_CART_QTY",
                          payload: {
                            id: item.id,
                            addedQuantity: e.target.value,
                          },
                        })
                      }
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </td>
                  <td>{item.price} BDT</td>
                  <td>{item.addedQuantity * item.price} BDT</td>
                  <td>
                    <button
                      onClick={() => {
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: item,
                        });
                      }}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={5}>
                  <label>
                    Sub Total: {subTotal} BDT <br></br>
                  </label>
                  <button
                    onClick={() => {
                      router.push("/checkout");
                    }}
                  >
                    Proceed to Checkout
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>
        ) : (
          <h3>Sorry, No items added to the cart!</h3>
        )}
      </div>
    </>
  );
}
