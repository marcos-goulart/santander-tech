// import products from "./produtos.json";
import path from "path"
import fs from 'fs';


const productJson = JSON.stringify(
  [
    {
      name: "Pair of socks",
      amountInStock: 100,
      unitValue: 5,
    },

    {
      name: "T-Shirt",
      amountInStock: 500,
      unitValue: 45,
    },
  ],
  null,
  2,
);

const fileOutPath = path.join(__dirname, "products-generated.json")

fs.writeFileSync(fileOutPath, productJson)

const products = JSON.parse(productJson)

console.log(productJson)
console.log(products)