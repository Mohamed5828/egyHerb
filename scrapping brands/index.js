const fs = require("fs/promises");
const selector = require("./selector");
const puppeteer = require("puppeteer");
const {
  formObjectData,

  postProduct,
} = require("./helperFunctions");
const {
  allBrandsSelector,
  langChangeBtn,
  modal,
  destinationCountry,
  usCountry,
  units,
  metricSys,
  saveBtn,
} = selector;
let firstRun;
let brandUrlsData = [];
let brandNamesData = [];
let dbServer = "http://localhost:8080/categories";
const brandUrl = "https://www.iherb.com/catalog/brandsaz";
const proxyServer = "15.204.161.192:1855";
async function start() {
  firstRun = 1;
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: false,
    userDataDir: "./tmp",
    args: ["--no-sandbox"],
  });
  const page = await browser.newPage();
  await page.goto(brandUrl);
  if (firstRun == 0) {
    // await page.waitForNavigation();
    await Promise.all([
      page.click(langChangeBtn),
      await page.waitForSelector(modal),
      page.click(destinationCountry),
      page.click(usCountry),

      setTimeout(() => {
        page.click(units), page.click(metricSys);
      }, 1300),

      setTimeout(() => {
        page.click(saveBtn);
      }, 1400),
      await page.waitForNavigation(),
    ]);
  }
  firstRun = 1;
  try {
    brandUrlsData.push(
      await page.$$eval(allBrandsSelector, (li) => {
        return li.map((x) => x.href);
      })
    );
    brandNamesData.push(
      await page.$$eval(allBrandsSelector, (li) => {
        return li.map((x) => x.innerText);
      })
    );
  } catch (error) {}
  // console.log(brandUrlsData);
  let lessArray = [];
  formObjectData(lessArray, brandUrlsData.flat(), brandNamesData.flat());
  lessArray.sort();
  async function postProducts() {
    for (const x of lessArray) {
      await postProduct(x, dbServer);
    }
  }

  postProducts();
  // await fs.writeFile("data.json", jsonData);
  await browser.close();
}

start();
