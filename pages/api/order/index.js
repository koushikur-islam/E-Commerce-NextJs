import products from "../../../data/products.json";
import orders from "../../../data/orders.json";
const fs = require("fs");

export default function handler(req, res) {
  if (req.method == "POST") {
    orders.push(req.body);
    const cart = req.body.cart;
    for (let i = 0; i < cart.length; i++) {
      let objIndex = products.findIndex((obj) => obj.id == cart[i].id);
      products[objIndex].quantity =
        products[objIndex].quantity - cart[i].addedQuantity;
    }
    saveData();
    res.status(200).json("Successfull order!");
  } else if (req.method == "GET") {
    res.status(200).json(orders);
  }
}
function saveData() {
  fs.writeFileSync("data/products.json", JSON.stringify(products));
  fs.writeFileSync("data/orders.json", JSON.stringify(orders));
}
