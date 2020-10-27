 import crocks from "crocks"
  
const { State,Pair } = crocks

export let sell = (stockName, numberOfStocks) =>
  State(({ protfolio, prices }) => {
    //we pass along the prices also in the state
    var revenue = numberOfStocks * prices[stockName];
    protfolio[stockName] = protfolio[stockName] - numberOfStocks;
    var newProtfolio = protfolio;

    return Pair(revenue, { protfolio: newProtfolio, prices: prices });
  });

export let buy = stockName => valueOfStocks =>
  State(({ protfolio, prices }) => {
    var numberOfStocks = Math.round(valueOfStocks / prices[stockName]);
    var residualMoney = valueOfStocks - numberOfStocks * prices[stockName];

    protfolio[stockName] = protfolio[stockName] + numberOfStocks;
    var newProtfolio = protfolio;

    return Pair(residualMoney, { protfolio: newProtfolio, prices: prices });
  });
