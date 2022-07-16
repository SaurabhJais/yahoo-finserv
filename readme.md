let tesla = new yf("TSLA")

// Get the info of a ticker
let info = await tesla.info();


// Get historical price of a perios
// Valid periods are 1d,5d,1mo,3mo,6mo,1y,2y,5y,10y,ytd,max
// Valid intervals are 1m,2m,5m,15m,30m,60m,90m,1h,1d,5d,1wk,1mo,3mo
let hp = tesla.history_period("1mo", "15m")

/**
   Return
   [
     {
        timestamp: '16/7/2022, 12:45:00 am',
        volume: 4865450,
        open: 450,
        high: 460,
        low: 450,
        close: 451
     },
     {
        timestamp: '16/7/2022, 12:46:00 am',
        volume: 4516546,
        open: 451,
        high: 456,
        low: 448,
        close: 449
     },
     .
     .
     .
     .......

   ] 
 */
