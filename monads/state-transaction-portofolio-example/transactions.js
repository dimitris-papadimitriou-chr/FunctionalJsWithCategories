import { State } from "../State.js"

export let sell = (stockName, numberOfStocks) =>
  State(({ protfolio, prices }) => {
    var revenue = numberOfStocks * prices[stockName];
    protfolio[stockName] = protfolio[stockName] - numberOfStocks;
    var newProtfolio = protfolio;

    return {
      value: revenue,
      state: { protfolio: newProtfolio, prices: prices }
    };
  });

export let buy = stockName => valueOfStocks =>
  State(({ protfolio, prices }) => {
    var numberOfStocks = Math.round(valueOfStocks / prices[stockName]);
    var residualMoney = valueOfStocks - numberOfStocks * prices[stockName];

    protfolio[stockName] = protfolio[stockName] + numberOfStocks;
    var newProtfolio = protfolio;

    return {
      value: residualMoney,
      state: { protfolio: newProtfolio, prices: prices }
    };
  });
