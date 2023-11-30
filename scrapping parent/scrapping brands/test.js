const axios = require("axios");
let lessArray = [
  { name: "107 Beauty", categoryUrl: "https://www.iherb.com/c/107-beauty" },
  {
    name: "21st Century",
    categoryUrl: "https://www.iherb.com/c/21st-century-health-care",
  },
  {
    name: "310 Nutrition",
    categoryUrl: "https://www.iherb.com/c/310-nutrition",
  },
  {
    name: "A Dozen Cousins",
    categoryUrl: "https://www.iherb.com/c/a-dozen-cousins",
  },
  {
    name: "A La Maison de Provence",
    categoryUrl: "https://www.iherb.com/c/a-la-maison-de-provence",
  },
  {
    name: "A Taste Of Thai",
    categoryUrl: "https://www.iherb.com/c/a-taste-of-thai",
  },
  { name: "A Vogel", categoryUrl: "https://www.iherb.com/c/a-vogel" },
  {
    name: "A.C. Grace Company",
    categoryUrl: "https://www.iherb.com/c/a-c-grace-company",
  },
  { name: "A'Pieu", categoryUrl: "https://www.iherb.com/c/apieu" },
  { name: "A+D", categoryUrl: "https://www.iherb.com/c/a-d" },
  { name: "Abib", categoryUrl: "https://www.iherb.com/c/abib" },
  {
    name: "Abracadabra, Abra Therapeutics",
    categoryUrl: "https://www.iherb.com/c/abracadabra-abra-therapeutics",
  },
];

let dbServer = "http://localhost:8080/categories";

async function postProduct(product, databaseUrl) {
  try {
    const response = await axios.post(databaseUrl, product);
    // console.log(`Successfully posted product: ${product.title}`);
    // Handle the response if needed
    // console.log(response.data);
  } catch (error) {
    console.error(`Error posting product: ${product.title}`);
    console.error(error);
  }
}

async function postProducts() {
  lessArray.map((x) => {
    postProduct(x, dbServer);
  });
}
postProducts();
