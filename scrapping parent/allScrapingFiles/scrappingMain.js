const puppeteer = require("puppeteer");
const fs = require("fs/promises");
const selector = require("./selectorMain");
const axios = require("axios");

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
let lifeStageData = [];
let categoryData = [];
let supplierData = [];
let dimensionData = [];
let expireData = [];
let quantityData = [];
const dollarToday = 10;
let dataIndex = 0;
let productsData = [];
let preData = [];
const dbServer = "http://localhost:8080/products";

async function start(brandurl) {
  firstRun = 1;
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: false,
    userDataDir: "./tmp",
    args: ["--no-sandbox"],
  });
  const page = await browser.newPage();

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
        // console.log("Selector found!");
      } else {
        // Selector not found, do something else
        // console.log("Selector not found !");
        pageNumber = 2;

        break;
      }
    } catch (error) {
      // Handle the error when selector is not found
      // console.log("Selector not found !");
      pageNumber = 2;

      break;
    }

    pageNumber++;
    await page.waitForSelector(changeListing);

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
        // data.push(values);
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
    expireData
  );
  const jsonData = JSON.stringify(productsData);
  // async function postProducts() {
  //   for (const product of jsonData) {
  //     await postProduct(product, dbServer);
  //   }
  // }

  // postProducts();
  // await fs.writeFile("data.json", jsonData);
  await browser.close();
}

module.exports = { start };
