const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();

async function getBitcoinPrice() {
    let data = await CoinGeckoClient.coins.fetch('bitcoin');
    // noinspection
    let price = data.data.market_data.current_price.usd;
    return price
}

module.exports = {getBitcoinPrice}