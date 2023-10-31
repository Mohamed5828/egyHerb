const puppeteer = require("puppeteer");
const fs = require("fs/promises");
const selector = require("./selector");

const {
  imageSelector,
  titleSelector,
  weightSelector,
  quantitySelector,
  priceSelector,
  dimensionSelector,
  expireSelector,
  changeListing,
} = selector;

const {
  dataManipulation,
  waitForFullPageLoad,
  firstTimeRunning,
  listLayoutChange,
  formObjectData,
  blankPage,
  editExpireDate,
} = require("./helperFunctions");

let pageNumber = 6;
let url = `https://www.iherb.com/c/21st-century-health-care?p=`;
let firstRun = 0;
let imageData = [];
let titlesData = [];
let weightData = [];
let priceData = [];
let priceEGP = [];
let stockData = [];
let genderData = [];
let lifeStageData = [];
let categoryData = [];
let supplierData = [];
let dimensionData = [];
let expireData = [];
let quantityData = [];
const dollarToday = 10;
let dataIndex = 0;
let data = [];

async function start() {
  firstRun = 1;
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: false,
    userDataDir: "./tmp",
    args: ["--no-sandbox"],
  });
  const page = await browser.newPage();

  await page.goto(`${url}1`);
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
        break;
      }
    } catch (error) {
      // Handle the error when selector is not found
      // console.log("Selector not found !");
      break;
    }

    pageNumber++;
    await page.waitForSelector(changeListing);

    if (firstRun !== 0) {
      listLayoutChange(page);
    }
    await waitForFullPageLoad(page);
    try {
      titlesData.push(
        await page.$$eval(expireSelector, (e) => {
          return e.map((x) => x.textContent);
        })
      );
    } catch (error) {}

    await page.goto(`${url + pageNumber}`);
    // await page.waitForNavigation();
  }
  let expireData = editExpireDate(titlesData);

  data.push(titlesData);
  const json = JSON.stringify(data);
  await fs.writeFile("data.json", json);
  await browser.close();
}

start();
