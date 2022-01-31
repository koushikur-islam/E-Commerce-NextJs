import Head from "next/head";
import Link from "next/link";
import Invoice from "../../components/Invoice";

const InvoicePage = ({order}) => {
  return (
    <>
      <Head>
        <title>Invoice</title>
      </Head>
      <Invoice></Invoice>
    </>
  );
};
export default InvoicePage;
