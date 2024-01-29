const selector = require("./selectorCluster");

const {
  langChangeBtn,
  modal,
  destinationCountry,
  usCountry,
  units,
  metricSys,
  saveBtn,
} = selector;

async function waitForFullPageLoad(page) {
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

function formObjectData(
  jsonData,
  titles,
  images,
  secondImage,
  description,
  suggestedUseData,
  otherIngredData,
  category,
  categoyDescription
) {
  const objData = {
    title: titles[1],
    firstImage: images[0],
    secondImage: secondImage[0],
    description: description[0],
    suggestedUseData: suggestedUseData[0],
    otherIngredData: otherIngredData[0],
    categories: category,
    categories_description: categoyDescription,
  };
  jsonData.push(objData);
}

module.exports = {
  waitForFullPageLoad,
  firstTimeRunning,
  formObjectData,
};
