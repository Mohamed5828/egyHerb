const fs = require("fs/promises");
const selector = require("./selectorCluster");
const { Cluster } = require("puppeteer-cluster");
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
} = selector;
let firstRun = 1;
let imageData = [];
let titleData = [];
let descriptionData = [];
let suggestedUseData = [];
let otherIngredData = [];
let categoriesData = [];
let categoriesDescriptionData = [];
// let warnings = [];
// let dataIndex = 0;
let preData = [];

(async () => {
  const cluster = await Cluster.launch({
    concurrency: Cluster.CONCURRENCY_PAGE,
    maxConcurrency: 2,
    puppeteerOptions: {
      headless: false,
      defaultViewport: false,
      userDataDir: "./scrappingcluster/tmp",
      args: ["--no-sandbox"],
    },
  });

  await cluster.task(async ({ page, data: url }) => {
    await page.goto(url);
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
      imageData.flat(),
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
  });

  cluster.queue(
    "https://www.iherb.com/pr/21st-century-calcium-magnesium-zinc-d3-90-tablets/10695"
  );
  // many more pages

  await cluster.idle();
  await cluster.close();
})();
