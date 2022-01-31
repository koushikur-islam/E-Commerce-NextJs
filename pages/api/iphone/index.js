import products from "../../../data/products.json";
export default function handler(req, res) {
  const iphones = products.filter((product) => {
    if (product.category == "iphone") {
      return true;
    } else {
      return false;
    }
  });
  res.status(200).json(iphones);
}
