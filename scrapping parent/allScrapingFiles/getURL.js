const fs = require("node:fs");
const brandData = require("../tools/brandData.json");
const famouse = [
  "21st Century",
  "ACURE",
  "Advanced Clinicals",
  "ALLMAX",
  "Aveeno",
  "BioGaia",
  "Bluebonnet Nutrition",
  "Bob's Red Mill",
  "California Gold Nutrition",
  "Carlson",
  "Codeage",
  "Professional Brands",
  "Doctor's Best",
  "Enzymedica",
  "Eucerin",
  "Frontier Co-Op",
  "Garden of Life",
  "Idealove",
  "iHerb Brands",
  "Irwin Naturals",
  "Jarrow Formulas",
  "K-Beauty",
  "KAL",
  "Lake Avenue Nutrition",
  "Life Extension",
  "Life-flo",
  "Mild By Nature",
  "MuscleTech",
  "Natrol",
  "Natural Factors",
  "Nature's Answer",
  "Nature's Bounty",
  "NaturesPlus",
  "Nature's Way",
  "Nordic Naturals",
  "NOW Foods",
  "Optimum Nutrition",
  "Paradise Herbs",
  "SheaMoisture",
  "Simply Organic",
  "Solaray",
  "Solgar",
  "Source Naturals",
  "Sports Research",
  "Super Nutrition",
  "Swanson",
  "Sympli Beautiful",
  "Thorne",
  "Vital Proteins",
];
const outputData = [];
brandData.map((e) => {
  for (const brand of famouse) {
    if (e.name == brand) {
      outputData.push(e);
      continue;
    }
  }
});
// console.log(outputData);
const jsonData = JSON.stringify(outputData);
fs.writeFile("famous2.json", jsonData, (err) => {
  if (err) {
    console.error(err);
  }
});
