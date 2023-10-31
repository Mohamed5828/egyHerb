const selector = require("./selector");
const axios = require("axios");

const {
  langChangeBtn,
  modal,
  destinationCountry,
  usCountry,
  units,
  metricSys,
  saveBtn,
  changeListing,
} = selector;

async function waitForFullPageLoad(page) {
  await page.waitForNavigation({
    waitUntil: "load",
  });
  // Additional delay if needed
  await page.waitForTimeout(2000); // Wait for 2 seconds after the DOM content is loaded
}
async function firstTimeRunning(page) {
  page.waitForNavigation();
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

function arrayFlatting(array) {
  return array.flat();
}

function formObjectData(jsonData, URLS, names) {
  for (let i = 0; i < names.length; i++) {
    const objData = {
      name: names[i],
      categoryUrl: URLS[i],
    };
    jsonData.push(objData);
  }
}

async function postProduct(product, databaseUrl) {
  try {
    const response = await axios.post(databaseUrl, product);
    // console.log(`Successfully posted product: ${product.title}`);
    // Handle the response if needed
    // console.log(response.data);
  } catch (error) {
    console.error(`Error posting product: ${product.title}`);
    console.error(error);
  }
}

module.exports = {
  waitForFullPageLoad,
  firstTimeRunning,
  formObjectData,
  postProduct,
  arrayFlatting,
};
