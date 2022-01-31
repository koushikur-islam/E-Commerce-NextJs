import "../styles/globals.css";
import "../styles/layout.css";
import "../styles/product-card.css";
import "../styles/product-page.css";
import "../styles/home.css";
import "../styles/cart.css";
import "../styles/checkout.css";
import "../styles/order-card.css";
import "../styles/my-orders.css";

import Layout from "../components/Layout";
import Context from "../components/Context";

function MyApp({ Component, pageProps }) {
  return (
    <Context>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Context>
  );
}

export default MyApp;
