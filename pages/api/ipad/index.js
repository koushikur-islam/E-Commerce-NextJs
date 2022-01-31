import products from "../../../data/products.json";
export default function handler(req, res) {
  const ipads = products.filter((product) => {
    if (product.category == "ipad") {
      return true;
    } else {
      return false;
    }
  });
  res.status(200).json(ipads);
}
