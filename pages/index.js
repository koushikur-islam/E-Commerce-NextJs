import ProductCard from "../components/ProductCard";
import Head from "next/head";
import Products from "../data/products.json";
export default function Home({ iphones, macbooks, ipads }) {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="product-container">
        <label className="product-label">iPhone</label>
        {iphones.map((iphone) => (
          <ProductCard key={iphone.id} product={iphone}></ProductCard>
        ))}
      </div>
      <div className="product-container">
        <label className="product-label">Macbook</label>
        {macbooks.map((macbook) => (
          <ProductCard key={macbook.id} product={macbook}></ProductCard>
        ))}
      </div>

      <div className="product-container">
        <label className="product-label">iPad</label>
        {ipads.map((ipad) => (
          <ProductCard key={ipad.id} product={ipad}></ProductCard>
        ))}
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  let res = await fetch("http://localhost:3000/api/iphone");
  const iphones = await res.json();

  res = await fetch("http://localhost:3000/api/macbook");
  const macbooks = await res.json();

  res = await fetch("http://localhost:3000/api/ipad");
  const ipads = await res.json();

  // const iphones = Products.filter((element) => {
  //   if (element.category == "iphone") {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // });

  // const macbooks = Products.filter((element) => {
  //   if (element.category == "macbook") {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // });

  // const ipads = Products.filter((element) => {
  //   if (element.category == "ipad") {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // });

  return {
    props: {
      iphones,
      macbooks,
      ipads,
    },
  };
};
