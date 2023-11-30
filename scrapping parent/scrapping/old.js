const puppeteer = require("puppeteer");
const fs = require("fs/promises");
const selector = require("./selector");



const {
  langChangeBtn,
  modal,
  destinationCountry,
  usCountry,
  units,
  metricSys,
  saveBtn,
  changeListing,
  imageSelector,
  titleSelector,
  weightSelector,
  quantitySelector,
  priceSelector,
  dimensionSelector,
  expireSelector,
} = selector;
const url = "https://www.iherb.com/c/21st-century-health-care?p=3";

//the thing with first run is that there will be a parent code which would run this file and pass a variable which is equal to zero at first run and then equal to one
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

function dataManupilation() {
  weightData = weightData[0].map((str) => str.trim().replace(/\n/g, ""));
  weightData = weightData.map((str) => parseFloat(str));
  priceData = priceData[0].map((str) => str.trim().replace("$", ""));
  priceData = priceData.map((str) => parseFloat(str));
  for (let i = 0; i < weightData.length; i++) {
    EgyPrice = 1100;
  }
}

async function start() {
  // const browser = await puppeteer.launch();
  // const page = await browser.newPage();
  firstRun = 1;
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: false,
    userDataDir: "./tmp",
    args: ["--no-sandbox"],
  });
  const page = await browser.newPage();
  await page.goto(`${url}`);
  //this to see if the first time it runs else the selector should be already ready to capture the data
  if (firstRun === 0) {
    await Promise.all([
      page.click(langChangeBtn),
      await page.waitForSelector(modal),
      page.click(destinationCountry),
      page.click(usCountry),

      setTimeout(() => {
        page.click(units), page.click(metricSys);
      }, 1300),
      // page.waitForNavigation(),
      setTimeout(() => {
        page.click(saveBtn);
      }, 1400),
      await page.waitForNavigation(),

      page.click(changeListing),
      page.waitForNavigation(),
    ]);
  }
  if (firstRun !== 0) {
    await Promise.all([page.click(changeListing), page.waitForNavigation()]);
  }
  //for the last page

  try {
    imageData.push(
      await page.$$eval(imageSelector, (img) => {
        return img.map((x) => x.src);
      })
    );
  } catch (error) {}
  try {
    titlesData.push(
      await page.$$eval(titleSelector, (e) => {
        return e.map((x) => x.innerHTML);
      })
    );
  } catch (error) {}
  try {
    weightData.push(
      await page.$$eval(weightSelector, (e) => {
        return e.map((x) => x.innerHTML);
      })
    );
  } catch (error) {}
  try {
    quantityData.push(
      await page.$$eval(quantitySelector, (e) => {
        return e.map((x) => x.innerHTML);
      })
    );
  } catch (error) {}
  try {
    priceData.push(
      await page.$$eval(priceSelector, (e) => {
        return e.map((x) => x.innerHTML);
      })
    );
  } catch (error) {}
  try {
    dimensionData.push(
      await page.$eval(dimensionSelector, (e) => {
        return e.map((x) => x.getAttribute("data-metric"));
      })
    );
  } catch (error) {}
  // try {
  //   expireData.push(
  //     await page.$$eval(expireSelector, (e) => {
  //       return e.map((x) => x.innerHTML);
  //     })
  //   );
  // } catch (error) {}
  // console.log(titlesData);
  dataManupilation();
  const data = [];
  for (let i = 0; i < titlesData.length; i++) {
    const objData = {
      image: imageData[i],
      title: titlesData[i],
      weight: weightData[i],
      quantity: quantityData[i],
      price: priceData[i],
      priceEgypt: priceEGP[i],
      dimensions: dimensionData[i],
    };
    // expiry: expireData[i],
    data.push(objData);
  }
  const json = JSON.stringify(data);

  await fs.writeFile("data.json", json);
  await browser.close();
}

start();
