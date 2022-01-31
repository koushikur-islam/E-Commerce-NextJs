import ProductCard from "../../components/ProductCard";
import Head from "next/head";
import Products from "../../data/products.json";

export default function iPhone({ iphones }) {
  return (
    <>
      <Head>
        <title>iPhone</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="product-container">
        <label className="product-label">iPhone</label>
        {iphones.map((iphone) => (
          <ProductCard key={iphone.id} product={iphone}></ProductCard>
        ))}
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/iphone");
  const iphones = await res.json();
  // const iphones = Products.filter((element) => {
  //   if (element.category == "iphone") {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // });
  return {
    props: {
      iphones,
    },
  };
};
