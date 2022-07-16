# yahoo-finserve


It is a package which fetches data of a specific instrument or indices.
 


## Installation

Install yahoo-finserve with npm

```bash
  npm install yahoo-finserve
```
    
## Usage/Examples

* Getting info of a stock

```javascript
let yf = require("yahoo-finserve")

let tesla = new yf("tsla");

tesla.info().then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})
```
### Output
```
{
  currency: 'USD',
  symbol: 'TSLA',
  exchangeName: 'NMS',
  instrumentType: 'EQUITY',
  firstTradeDate: 1277818200,
  timezone: 'EDT',
  exchangeTimezoneName: 'America/New_York',
  regularMarketPrice: 720.2,
  chartPreviousClose: 714.94,
  previousClose: 714.94
}
```

* Getting historical data of previous 1 month in 5 day interval
   * Valid periods: 1d,5d,1mo,3mo,6mo,1y,2y,5y,10y,ytd,max
   * Valid intervals: 1m,2m,5m,15m,30m,60m,90m,1h,1d,5d,1wk,1mo,3mo
```javascript
let yf = require("yahoo-finserve")

let tesla = new yf("tsla");

tesla.history_period("1mo", "5d").then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})
```

### Output
```
[
  {
    timestamp: '16/6/2022, 7:00:00 pm',
    volume: 35796900,
    open: 668.2100219726562,
    high: 675.5,
    low: 626.0800170898438,
    close: 639.2999877929688
  },
  {
    timestamp: '21/6/2022, 7:00:00 pm',
    volume: 40931000,
    open: 673.8099975585938,
    high: 730.72998046875,
    low: 673,
    close: 711.1099853515625
  },
  .
  .
  .
  .
]
```
* Getting historical data from 2021-07-05 to 2022-07-05 in 1 month timeframe

  * Valid date formate: YYYY-MM-DD
  * Always assign 0 for single digit date or month
  * For example: Don't write 2016-4-2 , instead write 2016-04-02 
  * Valid intervals: 1m,2m,5m,15m,30m,60m,90m,1h,1d,5d,1wk,1mo,3mo

```Javascript
let yf = require("yahoo-finserve")

let tesla = new yf("tsla");

tesla.history_between("2021-07-05", "2022-07-05", "1mo").then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})
```
### Output
```
[
  {
    timestamp: '1/8/2021, 9:30:00 am',
    volume: 381324900,
    open: 700,
    high: 740.3900146484375,
    low: 648.8400268554688,
    close: 735.719970703125
  },
  {
    timestamp: '1/9/2021, 9:30:00 am',
    volume: 390171300,
    open: 734.0800170898438,
    high: 799,
    low: 708.8499755859375,
    close: 775.47998046875
  }
  .
  .
  .
  .
  .
]
```
## Author

- [@saurabhjais](https://github.com/SaurabhJais)


## 🚀 About Me
A self-motivated and hardworking individual constantly involved in self-improvement. I was curious about how technology works from childhood, which is why I am in tech. I tried many languages but my interest inclined towards Javascript which is why I have chosen Mern Stack development. I am a full-stack developer currently working on the MERN stack.


## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/saurabh-jaiswaal/)
