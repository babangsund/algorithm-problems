// Given a list of prices and an amount to spend, what is the maximum number of toys Mark can buy?
// For example, if prices =[1,2,3,4] and Mark has k = 7 to spend, he can buy items [1,2,3] for 6, or [3,4] for 7 units of currency.
// He would choose the first group of 3 items.

/**
 * @param {number[]} prices
 * @param {number} k
 * @return {number}
 */
function maximumToys(prices, budget) {
  const sortedPrices = prices.sort((a, b) => a - b); // O(log prices)
  let items = 0;
  let spent = 0;

  // O(prices)
  for (const price of sortedPrices) {
    if (spent + price <= budget) {
      spent += price;
      items += 1;
    } else break;
  }

  return items;
}

// Runtime: O(n)
// Space: Constant
