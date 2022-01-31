import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import IphoneImage from "../../public/iphone-12-pro.png";
import ProductDetail from "../../components/ProductDetail";
const Macbook = ({ macbook }) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Head>
        <title>{macbook.name}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ProductDetail product={macbook}></ProductDetail>
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `http://localhost:3000/api/macbook/${context.params.id}`
  );
  const macbook = await res.json();
  return {
    props: {
      macbook,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:3000/api/macbook/`);
  const macbooks = await res.json();

  const ids = macbooks.map((macbook) => macbook.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default Macbook;
