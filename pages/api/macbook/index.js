import products from "../../../data/products.json";
export default function handler(req, res) {
  const macbooks = products.filter((product) => {
    if (product.category == "macbook") {
      return true;
    } else {
      return false;
    }
  });
  res.status(200).json(macbooks);
}
