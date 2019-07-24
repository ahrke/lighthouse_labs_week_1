const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

const calculateSalesTax = function(salesData, taxRates) {
  // initialize result variable as empty object
  // iterate through salesData, adding company to result variable
  // calculate salesTotal
  // add salesTotal to company sales total
  // determine tax based on province
  // add tax to company tax total
  // return result object

  let result = {}

  for (let data of salesData) {
    let totalSales = calculateTotalSales(data["sales"]);
    let totalTaxes = calculateTax(totalSales,taxRates[data["province"]]);
    result[data["name"]] 
      ? result[data["name"]] 
      : result[data["name"]] = {
        totalSales: 0,
        totalTaxes: 0
      };
    let companyName = result[data["name"]];
    companyName["totalSales"] += totalSales;
    companyName["totalTaxes"] += totalTaxes;
  }

  return result;
}

const calculateTotalSales = function(sales) {
  return sales.reduce((sum, num) => sum + num, 0)
}

const calculateTax = function(totalSales, taxRate) {
  return totalSales * taxRate;
}

console.log(calculateSalesTax(companySalesData,salesTaxRates))