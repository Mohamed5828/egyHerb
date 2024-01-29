const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
const selector = require("./selectorMain");

const fs = require("fs/promises");
// const axios = require("axios");

const {
  imageSelector,
  titleSelector,
  weightSelector,
  quantitySelector,
  priceSelector,
  dimensionSelector,
  expireSelector,
  changeListing,
  URLSelector,
  ratingSelector,
} = selector;

const {
  dataManipulation,
  waitForFullPageLoad,
  firstTimeRunning,
  listLayoutChange,
  formObjectData,
  blankPage,
  editExpireDate,
  postProduct,
} = require("./helperFunctionsMain");

let pageNumber = 1;
let firstRun;
let imageData = [];
let titlesData = [];
let weightData = [];
let priceData = [];
let priceEGP = [];
let productURL = [];
let ratingData = [];
let dimensionData = [];
let expireData = [];
let quantityData = [];
let dataIndex = 0;
let productsData = [];
let preData = [];

async function start(brandurl, brandId) {
  puppeteer.use(StealthPlugin());
  firstRun = 1;
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: false,
    // userDataDir: "./tmp",
    args: ["--no-sandbox"],
  });
  const page = await browser.newPage();
  // Enable request interception
  // await page.setRequestInterception(true);
  // page.setDefaultTimeout(0); // Set to 0 for no timeout

  // // Intercept network requests
  // page.on("request", (request) => {
  //   const url = request.url();
  //   // Block JavaScript files
  //   if (url.includes("gstatic.com/recaptcha")) {
  //     request.abort();
  //     console.log("intercepted");
  //   } else {
  //     request.continue();
  //   }
  // });
  await page.goto(`${brandurl}`);
  if (firstRun == 0) {
    firstTimeRunning(page);
    firstRun = 1;
  }

  while (true) {
    try {
      // Attempt to find the selector
      const element = await page.$(changeListing);

      if (element) {
        // Selector found, do something
        console.log("Selector found!");
      } else {
        // Selector not found, do something else
        console.log("Selector not found !");

        //captcha get me to this case

        pageNumber = 2;

        break;
      }
    } catch (error) {
      // Handle the error when selector is not found
      console.log("Selector not found Error !");
      pageNumber = 2;

      break;
    }

    pageNumber++;
    console.log(pageNumber);
    // await page.waitForSelector(changeListing, { timeout: 5000 });

    if (firstRun !== 0) {
      listLayoutChange(page);
    }

    const selectors = [
      {
        data: imageData,
        selector: imageSelector,
        attribute: "src",
        attributeValue: "",
      },
      {
        data: productURL,
        selector: URLSelector,
        attribute: "href",
        attributeValue: "",
      },
      {
        data: titlesData,
        selector: titleSelector,
        attribute: "innerHTML",
        attributeValue: "",
      },
      {
        data: weightData,
        selector: weightSelector,
        attribute: "innerHTML",
        attributeValue: "",
      },
      {
        data: quantityData,
        selector: quantitySelector,
        attribute: "innerHTML",
        attributeValue: "",
      },
      {
        data: priceData,
        selector: priceSelector,
        attribute: "innerHTML",
        attributeValue: "",
      },
      {
        data: dimensionData,
        selector: dimensionSelector,
        attribute: "getAttribute",
        attributeValue: "data-metric",
      },
      {
        data: ratingData,
        selector: ratingSelector,
        attribute: "innerText",
        attributeValue: "",
      },
    ];
    await waitForFullPageLoad(page);
    for (const { data, selector, attribute, attributeValue } of selectors) {
      try {
        data.push(
          await page.$$eval(
            selector,
            (elements, attr, attrValue) => {
              if (attrValue == "") {
                return elements.map((x) => x[attr]);
              } else {
                return elements.map((x) => x[attr](attrValue));
              }
            },
            attribute,
            attributeValue
          )
        );
      } catch (error) {
        data.push([]);
        pageNumber = 2;
      }
    }
    try {
      expireData.push(
        await page.$$eval(expireSelector, (e) => {
          return e.map((x) => x.textContent);
        })
      );
    } catch (error) {}

    // console.log(expireData);
    await page.goto(`${brandurl}?p=${pageNumber}`);
    // await page.waitForNavigation();
  }
  dataManipulation(weightData, priceData);
  expireData = editExpireDate(expireData);
  formObjectData(
    productsData,
    dataIndex,
    imageData.flat(),
    productURL.flat(),
    titlesData.flat(),
    weightData.flat(),
    quantityData.flat(),
    priceData.flat(),
    priceEGP,
    dimensionData.flat(),
    ratingData.flat(),
    expireData,
    brandId
  );
  const jsonData = JSON.stringify(productsData);
  // async function postProducts() {
  //   for (const product of jsonData) {
  //     await postProduct(product, dbServer);
  //   }
  // }

  // postProducts();
  await fs.writeFile("21st.json", jsonData);
  await browser.close();
}
start("https://www.iherb.com/c/21st-century-health-care", 2);
module.exports = { start };
