import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { CartState } from "../../components/Context";
import React from "react";
import { Formik, Form } from "formik";
import { TextField } from "../../components/TextField";
import * as Yup from "yup";

export default function Checkout() {
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

  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("First Name is required"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Last name is required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    phone: Yup.number().required("Phone number is required"),
    shippingAddress: Yup.string().required("Shipping address is required"),
  });

  return (
    <>
      <Head>
        <title>Checkout</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="checkout-container cart-container">
        <div className="title-box">
          <label className="header-label">Checkout</label>
        </div>
        <div className="products-box">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.addedQuantity}</td>
                  <td>{item.price} BDT</td>
                  <td>{item.addedQuantity * item.price} BDT</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={5}>
                  <label>
                    Sub Total: {subTotal} BDT <br></br>
                  </label>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="shipping-box">
          <label>Shipping and Payment</label>
          <br></br>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              shippingAddress: "",
            }}
            validationSchema={validate}
            onSubmit={(values) => {
              const order = {
                shippingData: values,
                cart,
              };
              fetch("http://localhost:3000/api/order", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(order),
              })
                .then((response) => {
                  response.text().then((body) => {
                    if (response.ok) {
                      dispatch({
                        type: "CLEAR_CART",
                      });
                      router.push("/orders");
                    }
                  });
                })
                .catch((error) => {
                  reject(error);
                });
            }}
          >
            {(formik) => (
              <div>
                <Form>
                  <TextField label="First Name" name="firstName" type="text" />
                  <TextField label="last Name" name="lastName" type="text" />
                  <TextField label="Email" name="email" type="email" />
                  <TextField label="Phone" name="phone" type="number" />
                  <TextField
                    label="Shipping Address"
                    name="shippingAddress"
                    type="text"
                  />
                  <button type="submit">Submit</button>
                </Form>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}
