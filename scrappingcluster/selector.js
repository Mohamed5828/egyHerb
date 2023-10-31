const titleSelector = "#name";
const imageSelector =
  "#product-image > div.thumbnail-container > div:nth-child(2) > img";
const descSelector =
  "body > div.product-grouping-wrapper.defer-block > article > div.container.product-overview > div > section > div.inner-content > div > div > div.col-xs-24.col-md-14 > div:nth-child(1) > div > div";

const suggested =
  "body > div.product-grouping-wrapper.defer-block > article > div.container.product-overview > div > section > div.inner-content > div > div > div.col-xs-24.col-md-14 > div:nth-child(2) > div > p ";

const otherIn =
  "body > div.product-grouping-wrapper.defer-block > article > div.container.product-overview > div > section > div.inner-content > div > div > div.col-xs-24.col-md-14 > div:nth-child(3) > div > p";
const langChangeBtn =
  "#universal-branded-header > div.iherb-header.iherb-header-layout.stackable-base > div.universal-header.iherb-universal > div > div.universal-header-end > div.iherb-header-ccl > div.selected-country-wrapper > div.country-select";
const modal =
  "body > header > div.language-menu.language-menu-universal > div > div > div > div:nth-child(3)";
const destinationCountry =
  ".select-country > label:nth-child(2) > span:nth-child(1)";
const usCountry =
  "body > header > div.language-menu.language-menu-universal > div > div > div > div:nth-child(3) > div > div > div:nth-child(1)";
const units = ".select-weight > label:nth-child(2) > span:nth-child(1)";
const metricSys =
  "body > header > div.language-menu.language-menu-universal > div > div > div > div:nth-child(7) > div > div > div:nth-child(1)";
const saveBtn =
  "body > header > div.language-menu.language-menu-universal > div > div > div > div.ccl-btn > div:nth-child(2) > button ";
module.exports = {
  imageSelector,
  descSelector,
  suggested,
  titleSelector,
  otherIn,
  langChangeBtn,
  modal,
  destinationCountry,
  usCountry,
  units,
  metricSys,
  saveBtn,
};
