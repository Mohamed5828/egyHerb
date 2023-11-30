let brandsName = [
  "https://www.iherb.com/c/107-beauty",
  "https://www.iherb.com/c/21st-century-health-care",
  "https://www.iherb.com/c/310-nutrition",
  "https://www.iherb.com/c/a-dozen-cousins",
  "https://www.iherb.com/c/a-la-maison-de-",
  "https://www.iherb.com/c/a-taste-of-thai",
  "https://www.iherb.com/c/a-vogel",
  "https://www.iherb.com/c/a-c-grace-company",
  "https://www.iherb.com/c/apieu",
  "https://www.iherb.com/c/a-d",
  "https://www.iherb.com/c/abib",
  "https://www.iherb.com/c/abracadabra-abra-therapeutics",
  "https://www.iherb.com/c/abreva",
  "https://www.iherb.com/c/absolute-nutrition",
  "https://www.iherb.com/c/act",
  "https://www.iherb.com/c/action-labs",
  "https://www.iherb.com/c/acure",
  "https://www.iherb.com/c/acwell",
];

const scrapProducts = require("./scrapping/index");
// const scrapBrand = require("./scrapping brands/index");
// const scrapProductDeatails = require("./scrappingcluster/index");

const axios = require("axios");
const { postData } = require("./tools/dataPost");
const backendSaveorUpdate = "/api/products/updateOrSave";
let allProductsData = [];




// Example usage

processURLs(brandsName);
postData(
  backendSaveorUpdate,
  allProductsData,
  () => {
    console.log("Success"); // Log a simple success message
    // Handle success, if needed
  },
  (error) => {
    console.error("Error:", error.message);
  }
);
// Replace 'your-username', 'your-password', and 'your-api-endpoint' with actual values
// performGetRequest(
//   "ahmed@gmail.com",
//   "12345",
//   "http://localhost:8080/brand/getbrand/urls"
// );
