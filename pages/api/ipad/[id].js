import products from "../../../data/products.json";
export default function handler(req, res) {
  const ipad = products.filter((element) => {
    if (element.id == req.query.id) {
      return true;
    } else {
      return false;
    }
  });
  res.status(200).json(ipad[0]);
}
