import ProductCard from "../../components/ProductCard";
import Head from "next/head";

export default function iPhone({ macbooks }) {
  return (
    <>
      <Head>
        <title>Macbook</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="product-container">
        <label className="product-label">Macbook</label>
        {macbooks.map((macbook) => (
          <ProductCard key={macbook.id} product={macbook}></ProductCard>
        ))}
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/macbook");
  const macbooks = await res.json();

  return {
    props: {
      macbooks,
    },
  };
};
