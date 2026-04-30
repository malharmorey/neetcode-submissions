class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
         let maxDiff = 0;
    let x = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[x]) {
            if (prices[i] - prices[x] > maxDiff) {
                maxDiff = prices[i] - prices[x]
            }
        } else {
            x = i
        }
    }
    return maxDiff
    }
}
