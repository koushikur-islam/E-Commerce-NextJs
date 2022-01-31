import ProductCard from "../../components/ProductCard";
import Head from "next/head";

export default function iPhone({ ipads }) {
  return (
    <>
      <Head>
        <title>iPad</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="product-container">
        <label className="product-label">iPad</label>
        {ipads.map((ipad) => (
          <ProductCard key={ipad.id} product={ipad}></ProductCard>
        ))}
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/ipad");
  const ipads = await res.json();

  return {
    props: {
      ipads,
    },
  };
};
