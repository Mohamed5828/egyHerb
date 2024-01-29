const selector = require("./selectorMain");
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

function dataManipulation(weightData, priceData) {
  weightData = weightData[0].map((str) => str.trim().replace(/\n/g, ""));
  weightData = weightData.map((str) => parseFloat(str));
  priceData = priceData[0].map((str) => str.trim().replace("$", ""));
  priceData = priceData.map((str) => parseFloat(str));
  for (let i = 0; i < weightData.length; i++) {
    EgyPrice = 1100;
  }
}
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
    // page.click(destinationCountry),
    // page.click(usCountry),

    setTimeout(() => {
      // page.click(units), page.click(metricSys);
    }, 1300),

    setTimeout(() => {
      // page.click(saveBtn);
    }, 1400),
    await page.waitForNavigation(),

    // page.click(changeListing),
    page.waitForNavigation(),
  ]);
}

async function listLayoutChange(page) {
  await Promise.all([page.click(changeListing), page.waitForNavigation()]);
}

function formObjectData(
  jsonData,
  startingIndex,
  images,
  URLS,
  titles,
  wieghts,
  quantaties,
  prices,
  pricesEgy,
  productsDimensions,
  ratings,
  expires
) {
  let index = startingIndex * 48;
  for (let i = index; i < titles.length + index; i++) {
    const objData = {
      firstImage: images[i],
      popularity: i,
      productUrl: URLS[i],
      title: titles[i],
      weight: wieghts[i],
      quantity: quantaties[i],
      priceUs: prices[i],
      priceEg: pricesEgy[i],
      dimensions: productsDimensions[i],
      expiryDate: expires[i],
      rating: ratings[i],
      brandId: categoryToId(titles[i]),
    };
    jsonData.push(objData);
  }
}

function categoryToId(categoryName) {
  const keyValuePair = {
    a: 1,
    b: 2,
  };
  return keyValuePair[categoryName];
}

function blankPage(changeListing) {
  return document.querySelector(changeListing) === null;
}
function editExpireDate(textArray) {
  const modifiedArray = textArray
    .flat(2)
    .map((element) => {
      const words = element.split(" ");
      return `${words[324]} ${words[325]}`;
    })
    .map((element) => element.replace("\n", ""));
  return modifiedArray;
}
async function postProduct(product, databaseUrl) {
  try {
    const response = await axios.post(databaseUrl, product);
    console.log(`Successfully posted product: ${product.title}`);
    // Handle the response if needed
    // console.log(response.data);
  } catch (error) {
    console.error(`Error posting product: ${product.title}`);
    console.error(error);
  }
}

module.exports = {
  dataManipulation,
  waitForFullPageLoad,
  firstTimeRunning,
  listLayoutChange,
  formObjectData,
  blankPage,
  editExpireDate,
  postProduct,
};
