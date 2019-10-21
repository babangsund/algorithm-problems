// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

function maxProfit(prices) {
  let minPrice = null;
  let maxProfit = 0;

  for (const price of prices) {
    if (minPrice === null || price < minPrice) minPrice = price;
    else if (price - minPrice > maxProfit) maxProfit = price - minPrice;
  }

  return maxProfit;
}

// Runtime: O(n), n = prices.length;
// Space: O(1)
