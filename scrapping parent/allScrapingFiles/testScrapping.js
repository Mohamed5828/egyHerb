const puppeteer = require("puppeteer");
const selector = require("./selectorMain");

const fs = require("fs/promises");
const {
  dataManipulation,
  editExpireDate,
  formObjectData,
} = require("./helperFunctionsMain");

const {
  langChangeBtn,
  modal,
  destinationCountry,
  usCountry,
  units,
  metricSys,
  saveBtn,
  changeListing,
  notFound,
  imageSelector,
  titleSelector,
  weightSelector,
  quantitySelector,
  priceSelector,
  expireSelector,
  dimensionSelector,
  ratingSelector,
  URLSelector,
  outOfStock,
} = selector;

let pageNumber = 1;
let firstRun = 0;
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

async function start(brandurl, currentName, brandId) {
  const browser = await puppeteer.launch({
    headless: false,
    // defaultViewport: false,
    // userDataDir: "./tmp",
    // args: ["--no-sandbox"],
    args: ["--incognito"],
  });
  // const page = await browser.newPage();

  const context = await browser.createIncognitoBrowserContext();
  const page = await context.newPage();

  await page.goto(`${brandurl}`);
  page.setDefaultTimeout(0);
  /* First Run only to get the setting Done  */
  if (firstRun == 0) {
    page.waitForNavigation();
    if (!langChangeBtn) {
      page.waitForNavigation();
      firstRun--;
    }
    page.click(langChangeBtn);
    await page.waitForSelector(modal);
    page.click(destinationCountry);
    page.click(usCountry);
    setTimeout(() => {
      page.click(units);
      page.click(metricSys);
    }, 2500);

    setTimeout(() => {
      page.click(saveBtn);
    }, 5000),
      console.log("all done");
    firstRun++;
    await page.waitForNavigation();
  }

  while (true) {
    try {
      const element = await page.$(notFound);
      if (!element) {
        // if (!element || outOfStock) {
        // Selector found, do something
        // console.log(outOfStock);
        console.log(element);
        console.log("Selector found!");
      } else {
        // Selector not found, do something else
        console.log("Selector not found !");
        //captcha get me to this case
        pageNumber = 1;
        break;
      }
    } catch (error) {
      // Handle the error when selector is not found
      console.log("Selector not found Error !");
      pageNumber = 1;

      break;
    }

    pageNumber++;
    page.click(changeListing);
    await page.waitForNavigation();
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
    await page.waitForSelector(titleSelector);
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

    console.log(pageNumber);
    await page.goto(`${brandurl}?p=${pageNumber}`);
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
  let jsonData = JSON.stringify(productsData);
  // async function postProducts() {
  //   for (const product of jsonData) {
  //     await postProduct(product, dbServer);
  //   }
  // }

  // postProducts();
  await browser.close();
  await fs.writeFile(`${currentName}.json`, jsonData);
  productsData = [];
  jsonData = [];
  imageData = [];
  titlesData = [];
  weightData = [];
  priceData = [];
  priceEGP = [];
  productURL = [];
  ratingData = [];
  dimensionData = [];
  expireData = [];
  quantityData = [];
}
module.exports = { start };
