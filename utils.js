function isLeapYear(year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

function isDateValid(date) {
     if (date.length == 10) {
        let dateArray = date.split("-")
        let day = parseInt(dateArray[2]);
        let month = parseInt(dateArray[1]);
        let year = parseInt(dateArray[0]);
        console.log(day, month, year)

        if (month > 12 || month < 0) {
            return false;
        }
        if (year > new Date().getFullYear()) {
            return false;
        }
        if (day < 1 || day > 31) {
            return false;
        }

        if ((day == 29) && (month == 2) && (isLeapYear(year) == false)) {
            return false;
        }

        if((day == 30 || day == 31) && month == 2){
            return false;
        }

        if (day == 29 && isLeapYear(year) == true) {
            return true;
        }

        if ([1, 3, 5, 7, 8, 10, 12].includes(month) == false && day == 31) {
            return false;
        }
        return true
    } else {
        return false;
    }
}



function convert_loaded_data_into_resulting_array(loadedData){
    // Organise details in arrays
    let timestampArray = loadedData.data.chart.result[0].timestamp
    let openPrices = loadedData.data.chart.result[0].indicators.quote[0].open
    let closePrices = loadedData.data.chart.result[0].indicators.quote[0].close
    let highPrices = loadedData.data.chart.result[0].indicators.quote[0].high
    let lowPrices = loadedData.data.chart.result[0].indicators.quote[0].low
    let volumeArray = loadedData.data.chart.result[0].indicators.quote[0].volume


    let resultingArray = [];

    // Push data into resulting array
    for (let i = 0; i < timestampArray.length; i++) {
        let objectBlueprint = {
            timestamp: null,
            volume: null,
            open: null,
            high: null,
            low: null,
            close: null
        }
        objectBlueprint.timestamp = new Date(timestampArray[i] * 1000).toLocaleString();
        objectBlueprint.volume = volumeArray[i];
        objectBlueprint.high = highPrices[i];
        objectBlueprint.low = lowPrices[i];
        objectBlueprint.open = openPrices[i];
        objectBlueprint.close = closePrices[i];
        resultingArray.push(objectBlueprint);
    }
    return resultingArray;
}

function toUnixTimestamp(dt){
    return Math.round(Date.parse(dt) / 1000)
}

module.exports = {
    isDateValid,
    convert_loaded_data_into_resulting_array,
    toUnixTimestamp
}