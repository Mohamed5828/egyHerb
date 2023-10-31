const selector = require("./selector");

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
  description,
  suggestedUseData,
  otherIngredData
) {
  const objData = {
    title: titles,
    image: images,
    description: description,
    suggestedUseData: suggestedUseData,
    otherIngredData: otherIngredData,
  };
  jsonData.push(objData);
}

module.exports = {
  waitForFullPageLoad,
  firstTimeRunning,
  formObjectData,
};
