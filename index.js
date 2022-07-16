let axios = require("axios").default
let utils = require("./utils")
let _BASE_URL_ = require("./url")._BASE_URL_




class yf {
    constructor(ticker) {

        // Assign the ticker name 
        this.ticker = ticker;

    }

    // Get info of a ticker
    async info() {
        let we_have_to_show = ["currency", "symbol", "exchangeName",
            "instrumentType", "firstTradeDate", "timezone", "exchangeTimezoneName",
            "regularMarketPrice", "chartPreviousClose", "previousClose"
        ]
        try {
            let tickerData = await axios.get(_BASE_URL_ + "/v8/finance/chart/" + this.ticker);
            let metaData = tickerData.data.chart.result[0].meta;
            let info = {};
            we_have_to_show.forEach((detail) => {
                info[detail] = metaData[detail];
            })
            return info;
        } catch (err) {
            throw err
        }
    }



    // Get historical Data of a particular period of time
    /**
     * 
     * @param {Stirng} period  
     * Valid periods: 1d,5d,1mo,3mo,6mo,1y,2y,5y,10y,ytd,max
     * Either Use period parameter or use start and end
     * 
     * @param {String} interval 
     * Valid intervals: 1m,2m,5m,15m,30m,60m,90m,1h,1d,5d,1wk,1mo,3mo
     * Intraday data cannot extend last 60 days
     */


    async history_period(period = "1mo", interval = "1d") {
        period = period.toLowerCase();
        interval = interval.toLowerCase();
        let valid_periods = ["1d", "5d", "1mo", "3mo", "6mo", "1y", "2y", "5y", "10y", "ytd", "max"]
        let valid_interval = ['1m', '2m', '5m', '15m', '30m', '60m', '90m', '1h', '1d', '5d', '1wk', '1mo', '3mo']

        if (valid_periods.includes(period) == -1) {
            throw "Enter valid period value. Valid periods are 1d,5d,1mo,3mo,6mo,1y,2y,5y,10y,ytd,max"
        }
        if (valid_interval.includes(interval) == -1) {
            throw "Enter valid interval value. Valid intervals are 1d,5d,1mo,3mo,6mo,1y,2y,5y,10y,ytd,max"
        }

        // Setup the params
        let url = _BASE_URL_ + "/v8/finance/chart/" + this.ticker
        let params = "?range=" + period + "&interval=" + interval
        url += params;


        // Load the data from API
        let loadedData = await axios.get(url);
        let resultingArray = utils.convert_loaded_data_into_resulting_array(loadedData);
        return resultingArray
    }



    // Get historical data between two dates

    /**
     * 
     * @param {String} start 
     * Valid date formate: YYYY-MM-DD
     * Always assign 0 for single digit date or month
     * @param {Stirng} end 
     * Valid date formate: YYYY-MM-DD
     * Always assign 0 for single digit date or month
     * @param {String} interval 
     * Valid intervals: 1m,2m,5m,15m,30m,60m,90m,1h,1d,5d,1wk,1mo,3mo
     * Intraday data cannot extend last 60 days
     */

    async history_between(start, end, interval = "1h") {

        if (utils.isDateValid(start) && utils.isDateValid(end)) {
            // convert date into unix date here e.g. 1597948200
            console.log(start)

            start = utils.toUnixTimestamp(start)
            end = utils.toUnixTimestamp(end)
        } else {
            throw "Please enter a valid date"
        }

        let url = _BASE_URL_ + "/v8/finance/chart/" + this.ticker
        let params = "?period1=" + start + "&period2=" + end + "&interval=" + interval
        url += params
        console.log(url)

        let loadedData = await axios.get(url);

        let resultingArray = utils.convert_loaded_data_into_resulting_array(loadedData)
        return resultingArray
    }


}

module.exports = yf;
