import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import IphoneImage from "../../public/iphone-12-pro.png";
import ProductDetail from "../../components/ProductDetail";
const Ipad = ({ ipad }) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Head>
        <title>{ipad.name}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ProductDetail product={ipad}></ProductDetail>
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `http://localhost:3000/api/ipad/${context.params.id}`
  );
  const ipad = await res.json();
  return {
    props: {
      ipad,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:3000/api/ipad/`);
  const ipads = await res.json();

  const ids = ipads.map((ipad) => ipad.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default Ipad;
