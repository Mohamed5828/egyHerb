const fs = require("fs/promises");
const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
const selector = require("./selectorCluster");
// const { Cluster } = require("puppeteer-cluster");
const {
  formObjectData,
  waitForFullPageLoad,
  firstTimeRunning,
} = require("./helperFunctionsCluster");
const {
  imageSelector,
  descSelector,
  suggested,
  otherIn,
  titleSelector,
  categoriesSelector,
  langChangeBtn,
  modal,
  destinationCountry,
  usCountry,
  units,
  metricSys,
  saveBtn,
  categoriesDescriptionSelector,
  firstImageSelector,
} = selector;
let firstRun = 1;
let firstImage = [];
let secondImage = [];
let titleData = [];
let descriptionData = [];
let suggestedUseData = [];
let otherIngredData = [];
let categoriesData = [];
let categoriesDescriptionData = [];
// let warnings = [];
// let dataIndex = 0;
let preData = [];

async function start(brandurl) {
  // const cluster = await Cluster.launch({
  //   concurrency: Cluster.CONCURRENCY_PAGE,
  //   maxConcurrency: 2,
  //   puppeteerOptions: {
  //     headless: false,
  //     defaultViewport: false,
  //     userDataDir: "./scrappingcluster/tmp",
  //     args: ["--no-sandbox"],
  //   },
  // });
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
  await page.setRequestInterception(true);

  // Intercept network requests
  page.on("request", (request) => {
    // Block JavaScript files
    if (request.resourceType() === "script") {
      request.abort();
    } else {
      request.continue();
    }
  });
  //no js should be loaded

  await page.goto(`${brandurl}`);
  if (firstRun === 0) {
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
  const selectors = [
    {
      data: titleData,
      selector: titleSelector,
      attribute: "innerText",
    },
    {
      data: firstImage,
      selector: firstImageSelector,
      attribute: "src",
    },

    {
      data: secondImage,
      selector: imageSelector,
      attribute: "src",
    },
    {
      data: descriptionData,
      selector: descSelector,
      attribute: "innerHTML",
    },
    {
      data: suggestedUseData,
      selector: suggested,
      attribute: "innerText",
    },
    {
      data: otherIngredData,
      selector: otherIn,
      attribute: "innerHTML",
    },
    {
      data: categoriesData,
      selector: categoriesSelector,
      attribute: "innerText",
    },
    {
      data: categoriesDescriptionData,
      selector: categoriesDescriptionSelector,
      attribute: "innerText",
    },
  ];
  // await waitForFullPageLoad(page);

  for (const { data, selector, attribute } of selectors) {
    try {
      data.push(
        await page.$$eval(
          selector,
          (elements, attr) => {
            return elements.map((x) => x[attr]);
          },
          attribute
        )
      );
    } catch (error) {
      console.error(`Error scraping data: ${selector}`, error);
    }
  }

  formObjectData(
    preData,
    titleData.flat(),
    firstImage.flat(),
    secondImage.flat(),
    descriptionData.flat(),
    suggestedUseData.flat(),
    otherIngredData.flat(),
    categoriesData.flat(),
    categoriesDescriptionData.flat()
  );
  try {
    const json = JSON.stringify(preData);
    console.log(preData);
    await fs.writeFile("data.json", json);
    console.log("Data has been written to data.json successfully.");
  } catch (error) {
    console.error("Error writing data to data.json:", error);
  }

  // many more pages

  await browser.close();
}
start(
  "https://www.iherb.com/pr/21st-century-calcium-magnesium-zinc-d3-90-tablets/10695"
);
