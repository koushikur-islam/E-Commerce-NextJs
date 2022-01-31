import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import IphoneImage from "../../public/iphone-12-pro.png";
import ProductDetail from "../../components/ProductDetail";
import Products from "../../data/products.json";

const IPhone = ({ iphone }) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Head>
        <title>{iphone.name}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ProductDetail product={iphone}></ProductDetail>
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `http://localhost:3000/api/iphone/${context.params.id}`
  );
  const iphone = await res.json();
  // let iphone = null;

  // for(let i=0; i<Products.length; i++){
  //   if(Products[i].id === context.params.id){
  //     iphone = Products[i];
  //   }
  // }
  return {
    props: {
      iphone: iphone,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:3000/api/iphone/`);
  const iphones = await res.json();

  const ids = iphones.map((iphone) => iphone.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default IPhone;
