const fs = require("fs/promises");
const selector = require("./selector");
const { Cluster } = require("puppeteer-cluster");
const {
  formObjectData,
  waitForFullPageLoad,
  firstTimeRunning,
} = require("./helperFunctions");
const { imageSelector, descSelector, suggested, otherIn, titleSelector } =
  selector;
let pageNumber = 1;
let firstRun;
let imageData = [];
let titleData = [];
let descriptionData = [];
let suggestedUseData = [];
let otherIngredData = [];
let warnings = [];
let dataIndex = 0;
let preData = [];
let urlForProducts = [
  "https://www.iherb.com/pr/21st-century-calcium-magnesium-zinc-d3-90-tablets/10695",
];

(async () => {
  const cluster = await Cluster.launch({
    concurrency: Cluster.CONCURRENCY_CONTEXT,
    maxConcurrency: 2,
    puppeteerOptions: {
      headless: false,
      defaultViewport: false,
      userDataDir: "./tmp",
      args: ["--no-sandbox"],
    },
  });

  await cluster.task(async ({ page, data: url }) => {
    await page.goto(url);
    if (firstRun == 1) {
      firstTimeRunning(page);
    }
    const selectors = [
      {
        data: titleData,
        selector: titleSelector,
        attribute: "textContent",
      },
      {
        data: imageData,
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
        attribute: "textContent",
      },
      {
        data: otherIngredData,
        selector: otherIn,
        attribute: "textContent",
      },
    ];
    await waitForFullPageLoad(page);
    for (const { data, selector, attribute } of selectors) {
      try {
        const element = await page.$(selector);
        const value = await page.evaluate(
          (el, attr) => el[attr],
          element,
          attribute
        );
        data.push(value);
      } catch (error) {
        console.error("Error scraping data:", error);
      }
    }

    formObjectData(
      preData,
      titleData,
      imageData,
      descriptionData,
      suggestedUseData,
      otherIngredData
    );
    const json = JSON.stringify(preData);
    fs.writeFile("data.json", json);
  });

  cluster.queue(
    "https://www.iherb.com/pr/21st-century-calcium-magnesium-zinc-d3-90-tablets/10695"
  );
  // many more pages

  await cluster.idle();
  await cluster.close();
})();
