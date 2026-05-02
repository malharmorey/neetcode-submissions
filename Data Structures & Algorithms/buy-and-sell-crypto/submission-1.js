class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let p1 = 0;
        let p2 = 1;

        while( p1 < prices.length || p2 < prices.length ){
            if( prices[p2] > prices[p1]){
                let diff = prices[p2] - prices[p1]
                maxProfit = diff > maxProfit ? diff : maxProfit;
                ++p2
            } else{
                p1 = p2;
                ++p2;
            }
        }
       return maxProfit;
    }
}
