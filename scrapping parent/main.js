// const brandsData = require("./tools/brandData.json");
const brandsData = require("./tools/firstScrape.json");
// const postData = require("./tools/dataPost");
// const axios = require("axios");
// const backendSaveorUpdateURL = "/api/products/updateOrSave";
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const fs = require("fs");

const scrappingTest = require("./allScrapingFiles/testScrapping");

// const scrapBrand = require("./scrapping brands/index");
// const scrapProductDeatails = require("./scrappingcluster/index");
const processBrandAsync = async (currentBrand, index) => {
  await scrappingTest.start(currentBrand.brandUrl, currentBrand.name, index);
  console.log("currently processing the following brand " + currentBrand.name);
  // const dataDirectory = "dataCsv";
  // const filePath = `${dataDirectory}/${currentBrand.name}.csv`;

  // if (!fs.existsSync(dataDirectory)) {
  //   fs.mkdirSync(dataDirectory);
  // }

  // const csvWriter = createCsvWriter({
  //   path: filePath,
  //   header: [
  //     // Define headers based on your data structure
  //     { id: "firstImage", title: "firstImage" },
  //     { id: "popularity", title: "popularity" },
  //     { id: "productUrl", title: "productUrl" },
  //     { id: "title", title: "title" },
  //     { id: "weight", title: "weight" },
  //     { id: "quantity", title: "quantity" },
  //     { id: "priceUs", title: "priceUs" },
  //     { id: "priceEg", title: "priceEg" },
  //     { id: "dimensions", title: "dimensions" },
  //     { id: "expiryDate", title: "expiryDate" },
  //     { id: "rating", title: "rating" },
  //     { id: "brandId", title: "brandId" },
  //   ],
  // });

  // await csvWriter.writeRecords(scrappingData);
};

// Assuming brandsData is an array
const processBrands = async () => {
  for (let i = 0; i < brandsData.length; i++) {
    await processBrandAsync(brandsData[i], i);
  }
};

// Call the asynchronous function
processBrands()
  .then(() => {
    console.log("Processing completed.");
  })
  .catch((error) => {
    console.error("Error during processing:", error);
  });

// console.log(brandsData[0]);
// //postData takes (url , data , onsuccess, onError)
// postData(
//   backendSaveorUpdateURL,
//   allProductsData,
//   () => {
//     console.log("Success"); // Log a simple success message
//     // Handle success, if needed
//   },
//   (error) => {
//     console.error("Error:", error.message);
//   }
// );
// Replace 'your-username', 'your-password', and 'your-api-endpoint' with actual values
// performGetRequest(
//   "ahmed@gmail.com",
//   "12345",
//   "http://localhost:8080/brand/getbrand/urls"
// );
